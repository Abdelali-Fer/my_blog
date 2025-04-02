"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormDescription, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { login, signup } from "@/app/actions/auth.action"


const formSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  password: z.string().min(8, {
    message: "Password must be at least 8 characters.",
  }),
})

export function SignupForm() {
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
            router.push("/")
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
                {isLoading ? "Creating account..." : "Create account"}
            </Button>
            </form>
        </Form>
        <div className="text-center text-sm">
            Already have an account?{" "}
            <a href="/" className="underline underline-offset-4 hover:text-primary">
            Sign in
            </a>
        </div>
        </div>
    )
}

