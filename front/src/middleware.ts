import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { headers } from 'next/headers';
import jwt from 'jsonwebtoken';

export function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === '/api/auth/logout') {

    const headerLists = headers();
    const accessToken = headerLists.get('authorization')?.split(' ')[1];

    if (!accessToken) {
      return NextResponse.json(
        { message: 'Access token must be provided' },
        { status: 403 }
      );
    }

    const decodedToken = jwt.verify(
      accessToken,
      process.env.ACCESS_TOKEN_SECRET
    )
    return NextResponse.next();
  }
}
