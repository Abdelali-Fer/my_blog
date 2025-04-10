import { decrypt } from "@/lib/session";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";


export async function middleware(req:NextRequest) {
    const path = req.nextUrl.pathname;
    console.log("path:",path)

    const cookie =cookies().get("session")?.value;


    const session =await decrypt(cookie);
    
    if (path.startsWith('/author') && !session?.userId) {
        return NextResponse.redirect(new URL('/login', req.nextUrl));
    }
    if (path.startsWith('/login') && session?.userId) {
        return NextResponse.redirect(new URL("/author", req.nextUrl));
    }

    return NextResponse.next();
}
export const config = {
    matcher: [
      /*
       * Match all request paths except:
       * - _next/static (static files)
       * - _next/image (image optimization files)
       * - favicon.ico (favicon file)
       * - images - .svg, .png, .jpg, .jpeg, .gif, .webp
       *
       */
      "/author",
      "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
    ],
  };