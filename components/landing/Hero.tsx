import { EmailSignup } from "./EmailSignup"

export function Hero() {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      <div className="container px-4 md:px-6 mx-auto flex flex-col items-center text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-slate-900 max-w-4xl animate-fade-in-down">
          Ace Your UCAS Application with <span className="text-primary animate-pulse">AI</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl animate-fade-in-up [animation-delay:0.2s] opacity-0 [animation-fill-mode:forwards]">
          Personal statement feedback, university matching, and interview prep - all powered by insights from 100+ successful UCAS applications.
        </p>
        
        <div className="w-full max-w-md flex flex-col items-center space-y-4 animate-fade-in-up [animation-delay:0.4s] opacity-0 [animation-fill-mode:forwards]">
           <EmailSignup />
           <p className="text-xs text-muted-foreground">
             Launching December 2025 • UCAS deadline: 31 Jan 2026
           </p>
        </div>
      </div>
    </section>
  )
}
