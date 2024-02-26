import prisma from '@/utils/prisma';
import jwt from 'jsonwebtoken';
import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET(req: Request) {
  const cks = cookies();
  const idToken = cks.get(process.env.COOKIE_NAME);

  if (!idToken) {
    return NextResponse.json(
      { message: 'ID token must be provided' },
      { status: 401 },
    );
  }

  try {
    const decodedToken = (await jwt.verify(
      idToken.value,
      process.env.ID_TOKEN_SECRET
    )) as unknown as { userId: string; };

    if (!decodedToken || !decodedToken.userId) {
      return NextResponse.json(
        { message: 'Invalid token' },
        { status: 403 },
      );
    }

    const user = await prisma.user.findUnique({
      where: { id: decodedToken.userId },
      select: {
        id: true,
        email: true,
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

    const accessToken = await jwt.sign(
      { userId: user.id },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: '1d'
      }
    );

    return NextResponse.json(
      { user, accessToken },
      { status: 200 },
    );
  } catch (e) {
    console.log(e);
    return NextResponse.json(
      { message: 'User get error' },
      { status: 500 },
    );
  }
};
