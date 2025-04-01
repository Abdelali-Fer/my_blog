"use client";
import { sendMessage } from "@/app/actions/contact.action";
import React, { useState } from "react";
// Définition manuelle de `QueryType`
const QueryType = {
    GENERAL: "GENERAL",
    SUPPORT: "SUPPORT",
    FEEDBACK: "FEEDBACK",
    BUSINESS: "BUSINESS",
  } as const;
  
  // Création du type `QueryType`
  type QueryType = (typeof QueryType)[keyof typeof QueryType];

const ContactForm = () => {
    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [queryType, setQueryType] = useState<QueryType>("GENERAL");
    const [message, setMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [status, setStatus] = useState("");

    // Fonction pour envoyer les données du formulaire
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setStatus(""); // Reset status

        // Préparer les données
        const data = {
            fullName,
            email,
            queryType,
            content: message,
        };

        try {
            const result = await sendMessage(data); // Appel direct à la fonction server-side
            if (result.success) {
                setStatus("Message sent successfully!");
            } else {
                setStatus("Failed to send message.");
            }
        } catch (error) {
            console.error("Error:", error);
            setStatus("Error sending message.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6 sm:p-12">
            <div className="text-center">
                <p className="text-sm uppercase font-medium text-[#232536] ">Contact Us</p>
                <h2 className="text-3xl font-bold mt-2 text-[#232536] ">Let’s Start a Conversation</h2>
                <p className="text-gray-600 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
                </p>
            </div>

            <div className="bg-[#592EA9] text-white rounded-md mt-6 p-6 flex flex-col sm:flex-row justify-between">
                <div>
                    <p className="text-sm">Working Hours</p>
                    <p className="font-bold">Monday To Friday</p>
                    <p className="font-bold">9:00 AM to 8:00 PM</p>
                    <p className="text-sm mt-1">Our Support Team is available 24/7</p>
                </div>
                <div className="mt-4 sm:mt-0">
                    <p className="text-sm">Contact Us</p>
                    <p className="font-bold">020 7993 2905</p>
                    <p className="font-bold">hello@finsweet.com</p>
                </div>
            </div>

            {/* Form Section */}
            <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                <input
                    type="text"
                    placeholder="Full Name"
                    className="w-full p-3 border rounded-md"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                />
                <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full p-3 border rounded-md"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <select
                    className="w-full p-3 border rounded-md"
                    value={queryType}
                    onChange={(e) => setQueryType(e.target.value as QueryType)} // 👈 Convertir en QueryType
                >
                    <option value="GENERAL">General Inquiry</option>
                    <option value="SUPPORT">Support</option>
                    <option value="FEEDBACK">Feedback</option>
                    <option value="BUSINESS">Business</option>
                </select>
                <textarea
                    placeholder="Message"
                    className="w-full p-3 border rounded-md h-32"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                ></textarea>
                <button
                    type="submit"
                    className="w-full bg-[#FFD050] text-[#232536] p-3 rounded-md font-bold"
                    disabled={isSubmitting}
                >
                    {isSubmitting ? "Sending..." : "Send Message"}
                </button>
            </form>

            {/* Status message */}
            {status && (
                <div className={`mt-4 text-center text-lg ${status.includes("success") ? "text-green-500" : "text-red-500"}`}>
                    {status}
                </div>
            )}
        </div>
    );
};

export default ContactForm;
