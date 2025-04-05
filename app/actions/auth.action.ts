"use server"

import prisma from "@/lib/prisma"
import { createSession } from "@/lib/session"

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
            await createSession(user.id)
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
        await createSession(user.id);
        return { success: true };
    } catch (error) {
        console.error("Login error:", error);
        return { success: false, error: "Failed to login. Please try again." };
    }
}

export async function Logout() {
    
}
