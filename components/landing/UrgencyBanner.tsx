"use client"

import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"

export function UrgencyBanner() {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0 })

  useEffect(() => {
    const calculateTimeLeft = () => {
      // UCAS Deadline: Jan 31, 2026 at 18:00 UK Time (GMT/UTC+0 in Jan)
      const deadline = new Date("2026-01-31T18:00:00Z") 
      const now = new Date()
      const difference = deadline.getTime() - now.getTime()

      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
        })
      }
    }

    calculateTimeLeft()
    const timer = setInterval(calculateTimeLeft, 60000)

    return () => clearInterval(timer)
  }, [])

  return (
    <section className="w-full py-16 bg-primary text-white">
      <div className="container px-4 md:px-6 mx-auto flex flex-col items-center text-center space-y-8">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tighter animate-fade-in-down">UCAS Deadline: January 31, 2026</h2>
        
        <div className="grid grid-cols-3 gap-4 md:gap-8">
          <div className="flex flex-col items-center p-4 bg-white/10 rounded-lg backdrop-blur-sm min-w-[80px] md:min-w-[100px] hover:scale-110 hover:bg-white/20 transition-all duration-300 animate-scale-in [animation-delay:0.1s] opacity-0 [animation-fill-mode:forwards]">
            <span className="text-3xl md:text-6xl font-bold">{timeLeft.days}</span>
            <span className="text-xs md:text-sm font-medium uppercase tracking-widest opacity-80 mt-2">Days</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-white/10 rounded-lg backdrop-blur-sm min-w-[80px] md:min-w-[100px] hover:scale-110 hover:bg-white/20 transition-all duration-300 animate-scale-in [animation-delay:0.2s] opacity-0 [animation-fill-mode:forwards]">
            <span className="text-3xl md:text-6xl font-bold">{timeLeft.hours}</span>
            <span className="text-xs md:text-sm font-medium uppercase tracking-widest opacity-80 mt-2">Hours</span>
          </div>
          <div className="flex flex-col items-center p-4 bg-white/10 rounded-lg backdrop-blur-sm min-w-[80px] md:min-w-[100px] hover:scale-110 hover:bg-white/20 transition-all duration-300 animate-scale-in [animation-delay:0.3s] opacity-0 [animation-fill-mode:forwards]">
            <span className="text-3xl md:text-6xl font-bold">{timeLeft.minutes}</span>
            <span className="text-xs md:text-sm font-medium uppercase tracking-widest opacity-80 mt-2">Mins</span>
          </div>
        </div>

        <p className="text-lg md:text-xl max-w-2xl animate-fade-in-up [animation-delay:0.4s] opacity-0 [animation-fill-mode:forwards]">
          That&apos;s coming up fast. Most students spend 20+ hours on their personal statement alone. Don&apos;t leave it until the last minute.
        </p>

        <Button 
          size="lg" 
          variant="secondary" 
          className="h-14 px-8 text-lg font-bold bg-white text-primary hover:bg-slate-100 hover:text-primary hover:scale-105 transition-all duration-300 animate-fade-in-up [animation-delay:0.5s] opacity-0 [animation-fill-mode:forwards]"
          onClick={() => document.getElementById('hero-signup')?.scrollIntoView({ behavior: 'smooth' })}
        >
          Join the Waitlist
        </Button>
      </div>
    </section>
  )
}
