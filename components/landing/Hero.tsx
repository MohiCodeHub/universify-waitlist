import { EmailSignup } from "./EmailSignup"

export function Hero() {
  return (
    <section className="relative w-full py-20 md:py-32 overflow-hidden bg-gradient-to-b from-slate-50 to-white">
      <div className="container px-4 md:px-6 mx-auto flex flex-col items-center text-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-bold tracking-tighter text-slate-900 max-w-4xl">
          Get Into Your Dream University with <span className="text-primary">AI</span>
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
          Personal statement feedback, university matching, and interview prep - all powered by AI trained on 100+ successful UCAS applications.
        </p>
        
        <div className="w-full max-w-md flex flex-col items-center space-y-4">
           <EmailSignup />
           <p className="text-xs text-muted-foreground">
             Launching December 2025 • UCAS deadline: 31 Jan 2026
           </p>
        </div>

        <div className="flex items-center space-x-2 bg-white/50 backdrop-blur-sm px-4 py-2 rounded-full border border-slate-200 mt-8">
          <div className="flex -space-x-2">
            <div className="h-6 w-6 rounded-full bg-slate-200 border-2 border-white"></div>
            <div className="h-6 w-6 rounded-full bg-slate-300 border-2 border-white"></div>
            <div className="h-6 w-6 rounded-full bg-slate-400 border-2 border-white"></div>
          </div>
          <p className="text-sm text-slate-600 font-medium">
            Join 200+ Year 13 students using Universify
          </p>
        </div>
      </div>
    </section>
  )
}
