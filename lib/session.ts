import "server-only";
import {SignJWT,jwtVerify} from 'jose';
import { cookies } from "next/headers";
import prisma from "./prisma";

const encodedKey = new TextEncoder().encode(process.env.SESSION_SECRET );

export async function createSession(userId:number) {
    
    const user = await prisma.user.findUnique({
        where: { id:userId},
        select:{
            email:true
        }
    });

    if (!user) {
        return { success: false, error: "Invalid email or password" };
    }
    const expiresAt= new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);
    const session = await encrypt({
        userId,
        email: user.email,
        expiresAt,
    });

    cookies().set("session",session,{
        httpOnly: true,
        secure: true,
        expires:expiresAt,
        sameSite: 'lax',
    });
}

type SessionPayload={
    userId:number;
    expiresAt:Date;
    email:string;
}

export async function encrypt(payload:SessionPayload) {

    return new SignJWT(payload)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime(payload.expiresAt)
        .sign(encodedKey);

}
export async function decrypt(session:string |undefined="") {

    try {
        const { payload } = await jwtVerify(session, encodedKey,{
            algorithms:['HS256'],
        });
        return payload;
    } catch (error) {
        console.error('Failed to verify session :', error);
    }
}