import { NextResponse } from 'next/server';
import { NextRequest } from 'next/server';
import { headers } from 'next/headers';
import { isAuthenticated } from './utils/jwtTokenControl';

export async function middleware(req: NextRequest) {
  if (req.nextUrl.pathname === '/api/auth/logout') {
    if (!await isAuthenticated(req)) {
      return NextResponse.json(
        { message: "user is not authorized" },
        { status: 401 },
      );
    }

    return NextResponse.next();
  }
}
