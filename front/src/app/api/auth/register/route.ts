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
    const existingUser = await prisma.user.findUnique({
      where: { email: data.email }
    });

    if (existingUser) {
      return NextResponse.json(
        { message: 'Email already in use' },
        { status: 409 },
      );
    }

    const passwordHash = await argon2.hash(data.password);
    data.password = passwordHash;

    const newUser = await prisma.user.create({
      data,
      select: {
        id: true,
        username: true,
        email: true
      }
    });

    const idToken = await jwt.sign(
      { userId: newUser.id },
      process.env.ID_TOKEN_SECRET,
      {
        expiresIn: '7d'
      }
    );

    const accessToken = await jwt.sign(
      { userId: newUser.id },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: '1d'
      }
    );

    let res = NextResponse.json(
      { user: newUser, accessToken },
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
      { message: 'Email register error' },
      { status: 500 },
    );
  }
};
