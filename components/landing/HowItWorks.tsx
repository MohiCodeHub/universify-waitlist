import { MessageSquare, Target, Rocket } from "lucide-react"

export function HowItWorks() {
  return (
    <section className="w-full py-20 bg-white">
      <div className="container px-4 md:px-6 mx-auto flex flex-col items-center space-y-12">
        <div className="text-center space-y-4 max-w-3xl">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900">How Universify Works</h2>
          <p className="text-xl text-muted-foreground">From confused to confident in 10 minutes</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative w-full max-w-5xl">
           {/* Connector Line (Desktop only) */}
           <div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-200 -z-10"></div>

           {/* Step 1 */}
           <div className="flex flex-col items-center text-center space-y-4 bg-white p-6">
             <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold relative z-10 shadow-lg">
               <MessageSquare className="h-6 w-6" />
             </div>
             <h3 className="text-xl font-bold">1. Quick Chat</h3>
             <p className="text-muted-foreground">
               Have a 10-minute conversation with our AI about your goals, grades, and preferences.
             </p>
           </div>

           {/* Step 2 */}
           <div className="flex flex-col items-center text-center space-y-4 bg-white p-6">
             <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold relative z-10 shadow-lg">
               <Target className="h-6 w-6" />
             </div>
             <h3 className="text-xl font-bold">2. Get Insights</h3>
             <p className="text-muted-foreground">
               Receive university matches and personal statement feedback based on successful applicants.
             </p>
           </div>

           {/* Step 3 */}
           <div className="flex flex-col items-center text-center space-y-4 bg-white p-6">
             <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center text-xl font-bold relative z-10 shadow-lg">
               <Rocket className="h-6 w-6" />
             </div>
             <h3 className="text-xl font-bold">3. Apply Confidently</h3>
             <p className="text-muted-foreground">
               Submit your UCAS application knowing you&apos;ve been guided by expert AI.
             </p>
           </div>
        </div>
      </div>
    </section>
  )
}
