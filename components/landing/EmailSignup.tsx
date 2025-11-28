"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useToast } from "@/hooks/use-toast"
import { Loader2 } from "lucide-react"
import { submitEmail } from "@/app/actions/submit-email"
import { Turnstile } from "@marsidev/react-turnstile"

interface EmailSignupProps {
  placeholder?: string
  buttonText?: string
  className?: string
}

export function EmailSignup({
  placeholder = "Enter your email",
  buttonText = "Join Waitlist",
  className,
}: EmailSignupProps) {
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm<{ email: string }>()
  const { toast } = useToast()

  const onSubmit = async (data: { email: string }) => {
    setIsLoading(true)
    
    const result = await submitEmail(data.email)

    if (result.success) {
      toast({
        title: "You're on the list! 🎉",
        description: "We'll notify you when Universify launches.",
      })
      reset()
    } else {
      toast({
        title: "Something went wrong",
        description: result.message || "Please try again later.",
        variant: "destructive",
      })
    }

    setIsLoading(false)
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={`flex flex-col gap-4 w-full max-w-md ${className}`}>
      <div className="flex flex-col sm:flex-row gap-2">
        <div className="flex-1">
          <Input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Invalid email address",
              },
            })}
            placeholder={placeholder}
            className="h-12 text-lg"
            disabled={isLoading}
          />
          {errors.email && <p className="text-red-500 text-sm mt-1 ml-1">{errors.email.message}</p>}
        </div>
        <Button type="submit" size="lg" className="h-12 text-base font-semibold shrink-0" disabled={isLoading}>
          {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
          {buttonText}
        </Button>
      </div>
      <Turnstile 
        siteKey="0x4AAAAAACDZOboHYckodq9W" 
        options={{ size: 'invisible' }}
      />
    </form>
  )
}