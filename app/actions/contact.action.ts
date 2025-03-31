"use server";

import prisma from "@/lib/prisma";

export async function sendMessage(data: { fullName: string; email: string; queryType: string; content: string }) {
    try {
        const message = await prisma.message.create({ data });
        return { success: true, message };
    } catch (error) {
        console.error("Erreur lors de l'envoi du message:", error);
        return { success: false, error: "Impossible d'envoyer le message" };
    }
}
