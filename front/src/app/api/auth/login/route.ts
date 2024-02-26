import { NextResponse } from 'next/server';
import argon2 from 'argon2';
import jwt from 'jsonwebtoken';

import checkFields from '@/utils/checkFields';
import prisma from '@/utils/prisma';

export async function POST(req: Request) {
  const data = await req.json();

  if (!checkFields(data, ['email', 'password'])) {
    return NextResponse.json(
      { message: 'Some required fields are missing' },
      { status: 400 },
    );
  }

  try {
    const user = await prisma.user.findUnique({
      where: {
        email: data.email
      },
      select: {
        id: true,
        email: true,
        password: true,
        username: true,
        avatarUrl: true
      }
    });

    if (!user) {
      return NextResponse.json(
        { message: 'User not found' },
        { status: 404 },
      );
    }

    const isPasswordCorrect = await argon2.verify(user.password, data.password);

    if (!isPasswordCorrect) {
      return NextResponse.json(
        { message: 'Wrong password' },
        { status: 403 },
      );
    }

    const idToken = await jwt.sign(
      { userId: user.id },
      process.env.ID_TOKEN_SECRET,
      {
        expiresIn: '7d'
      }
    );

    const accessToken = await jwt.sign(
      { userId: user.id },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: '1d'
      }
    );

    let res = NextResponse.json(
      {
        user: {
          id: user.id,
          email: user.email,
          username: user.username,
          avatarUrl: user.avatarUrl
        },
        accessToken,
      },
      { status: 200 },
    );
    res.cookies.set({
      name: process.env.COOKIE_NAME,
      value: idToken,
      httpOnly: true,
      maxAge: 1000 * 60 * 60 * 24 * 7,
      path: '/',
      sameSite: true,
      secure: true,
    });

    return res;
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { message: 'User login error' },
      { status: 500 },
    );
  }
};
