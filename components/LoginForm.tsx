"use client"


import { login, signup } from "@/app/actions/auth.action"
import { redirect, useRouter } from "next/navigation"
import { useState } from "react"
import { useForm } from "react-hook-form"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "./ui/form"
import { Input } from "./ui/input"
import { Button } from "./ui/button"
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';


const formSchema = z.object({
    email: z.string().email({
        message: "Please enter a valid email address.",
    }),
    password: z.string().min(8, {
        message: "Password must be at least 8 characters.",
    }),
})

export function LoginForm() {
    const router = useRouter()
    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState<string | null>(null)

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: {
        email: "",
        password: "",
        },
    })

async function onSubmit(values: z.infer<typeof formSchema>) {
        setIsLoading(true)
        setError(null)

        try {
        const result = await login(values)

        if (result.success) {
            router.push("/author");
        } else {
            setError(result.error || "Something went wrong. Please try again.")
        }
        } catch (error) {
        setError("An unexpected error occurred. Please try again.")
        } finally {
        setIsLoading(false)
        }
}

    return (
        <div className="grid gap-6">
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                    <Input type="email" placeholder="john.doe@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                </FormItem>
                )}
            />
            <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                    <Input type="password" {...field} />
                    </FormControl>
                    <FormDescription>Password must be at least 8 characters long</FormDescription>
                    <FormMessage />
                </FormItem>
                )}
            />
            {error && <div className="text-sm font-medium text-destructive">{error}</div>}
            <Button type="submit" className="w-full" disabled={isLoading}>
                {isLoading ? "Login..." : "Login"}
            </Button>
            </form>
        </Form>
        </div>
    )
}

