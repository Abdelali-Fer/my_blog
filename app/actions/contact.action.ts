"use server";

import prisma from "@/lib/prisma";
import { QueryType } from "@prisma/client";

export async function sendMessage(data: { fullName: string; email: string; queryType: string; content: string }) {
    try {
        console.log(data);

        // Vérifier si queryType est bien une valeur de l'énum
        if (!Object.values(QueryType).includes(data.queryType as QueryType)) {
            throw new Error(`queryType invalide: ${data.queryType}`);
        }

        const message = await prisma.messages.create({
            data: {
                fullName: data.fullName,
                email: data.email,
                queryType: data.queryType as QueryType, // 👈 Convertir string en QueryType
                content: data.content,
            },
        });

        return { success: true, message };
    } catch (error) {
        console.error("Erreur lors de l'envoi du message:", error);
        return { success: false, error: "Impossible d'envoyer le message" };
    }
}
