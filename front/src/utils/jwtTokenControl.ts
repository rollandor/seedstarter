import * as jose from 'jose';
import { NextRequest } from 'next/server';
import { headers } from 'next/headers';

const jwtConfig = {
  secret: new TextEncoder().encode(process.env.ACCESS_TOKEN_SECRET),
};

export const isAuthenticated = async (req: NextRequest) => {
  const headerLists = headers();
  const accessToken = headerLists.get('authorization')?.split(' ')[1];
  if (!accessToken) {
    return false;
  }

  try {
    const decoded = await jose.jwtVerify(accessToken, jwtConfig.secret);

    if (decoded.payload?.userId) {
      return true;
    } else {
      return false;
    }
  } catch (err) {
    console.error('isAuthenticated error: ', err);

    return false;
  }
};