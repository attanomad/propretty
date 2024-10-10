"use server";
import { JWTPayload, importSPKI, jwtVerify } from "jose";
import { cookies } from "next/headers";
import "server-only";

const publicKey = process.env.PROPRETTY_API_JWT_PUBLIC_KEY_CONTENT!;
const publicKeyAlgo = process.env.PROPRETTY_API_JWT_ALGO || "RS256";

interface SessionPayload extends JWTPayload {
  userId: string;
  username: string;
  userRoles: string[];
}

export async function getJwtPayload(jwt: string) {
  const key = await importSPKI(publicKey, publicKeyAlgo);
  const { payload } = await jwtVerify<SessionPayload>(jwt, key);

  return payload;
}

export async function createSession(jwt: string) {
  const payload = await getJwtPayload(jwt);
  //   const expiresAt = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
  //   const session = await encrypt({ userId, expiresAt });
  if (!payload.exp) throw new Error(`JWT payload does not have 'exp' field`);

  const expiresInMilliseconds = payload.exp * 1000;

  cookies().set("session", jwt, {
    httpOnly: true,
    // TODO handle this for production
    // secure: true,
    expires: expiresInMilliseconds,
    sameSite: "lax",
    path: "/",
  });
}

export const getToken = (): string | undefined => {
  return cookies().get("session")?.value;
};
