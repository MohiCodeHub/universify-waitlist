"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { useToast } from "@/hooks/use-toast"
import { Loader2 } from "lucide-react"

interface EmailSignupProps {
  placeholder?: string
  buttonText?: string
  showTipsCheckbox?: boolean
  className?: string
}

export function EmailSignup({
  placeholder = "Enter your email",
  buttonText = "Join Waitlist",
  showTipsCheckbox = false,
  className,
}: EmailSignupProps) {
  const [isLoading, setIsLoading] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm<{ email: string }>()
  const { toast } = useToast()

  const onSubmit = async (data: { email: string }) => {
    setIsLoading(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000))
    console.log("Email submitted:", data.email)
    toast({
      title: "You're on the list! 🎉",
      description: "We'll notify you when Universify launches.",
    })
    setIsLoading(false)
    reset()
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
      {showTipsCheckbox && (
        <div className="flex items-center space-x-2">
            <Checkbox id="tips" defaultChecked />
            <label
              htmlFor="tips"
              className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-muted-foreground"
            >
              Send me UCAS tips while I wait
            </label>
        </div>
      )}
    </form>
  )
}
