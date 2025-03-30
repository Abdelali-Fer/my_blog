"use client";
import { useEffect } from "react";

export default function MarkdownRenderer({ content }: { content: string }) {
    useEffect(() => {
        document.querySelectorAll("pre").forEach((block) => {
        if (block.querySelector(".copy-button")) return; // Évite les duplications

        const button = document.createElement("button");
        button.innerText = "Copier";
        button.className = "copy-button";

        button.addEventListener("click", () => {
            const code = block.querySelector("code")?.innerText;
            if (code) {
            navigator.clipboard.writeText(code);
            button.innerText = "Copié !";
            setTimeout(() => (button.innerText = "Copier"), 2000);
            }
        });

        block.style.position = "relative";
        block.appendChild(button);
        });
    }, [content]);

    return <div className="prose dark:prose-invert mt-10 mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 markdown-content" dangerouslySetInnerHTML={{ __html: content }} />;
}
