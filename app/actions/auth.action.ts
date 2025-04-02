"use server"

import prisma from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import { cookies } from "next/headers"

type SignupData = {
    email: string
    password: string
}

type LoginData = {
    email: string;
    password: string;
};

export async function signup(data: SignupData) {

    try {
        const existingUser = await prisma.user.findUnique({
            where: { email: data.email },
        });

        if (existingUser) {
            return { success: false, error: "Email already in use" };
        }

        const user = await prisma.user.create({
            data: {
                email: data.email,
                password: data.password,
            },
        });

        if(user){
            cookies().set({
                name: "session",
                value: JSON.stringify({ userId: user.id, email: data.email }),
                httpOnly: true,
                path: "/",
                secure: process.env.NODE_ENV === "production",
                maxAge: 60 * 60 * 24 * 7, // 1 week
            })
        }
        return { success: true }
    } catch (error) {
        console.error("Signup error:", error)
        return {
            success: false,
            error: "Failed to create account. Please try again.",
        }
    }
}



export async function login(data: LoginData) {
    try {
        // Vérifier si l'utilisateur existe
        const user = await prisma.user.findUnique({
            where: { email: data.email ,password:data.password},
        });

        if (!user) {
            return { success: false, error: "Invalid email or password" };
        }
        // Stocker la session
        cookies().set({
            name: "session",
            value: JSON.stringify({ userId: user.id, email: user.email }),
            httpOnly: true,
            path: "/",
            secure: process.env.NODE_ENV === "production",
        maxAge: 60 * 60 * 24 * 7, // 1 semaine
        });

        return { success: true };
    } catch (error) {
        console.error("Login error:", error);
        return { success: false, error: "Failed to login. Please try again." };
    }
}

