import { NextResponse } from 'next/server';

export async function GET(req: Request) {
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
