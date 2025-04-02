import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
    const session = cookies().get("session");

    if (!session) {
        return NextResponse.json({ user: null }, { status: 200 });
    }

    try {
        const user = JSON.parse(session.value);
        return NextResponse.json({ user }, { status: 200 });
    } catch (error) {
        return NextResponse.json({ user: null }, { status: 500 });
    }
}
