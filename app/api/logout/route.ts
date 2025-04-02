import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  cookies().delete("session"); // Supprime le cookie
  return NextResponse.json({ success: true });
}
