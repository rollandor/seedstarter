import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

export async function GET(req: Request) {
  const cks = cookies();
  console.log(cks.getAll())

  let res = NextResponse.json(
    { message: 'Logout success' },
    { status: 200 },
  );

  res.cookies.set({
    name: process.env.COOKIE_NAME,
    value: '',
    httpOnly: true,
    maxAge: 0,
    path: '/',
    sameSite: true,
    secure: true
  });

  return res;
};

// export default authGuard(cookies(logoutHandler) as any);
