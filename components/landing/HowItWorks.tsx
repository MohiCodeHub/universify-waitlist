import { MessageSquare, FileText, CheckCircle2 } from "lucide-react"

export function HowItWorks() {
  return (
    <section className="w-full py-20 bg-white overflow-hidden">
      <div className="container px-4 md:px-6 mx-auto flex flex-col items-center space-y-16">
        <div className="text-center space-y-4 max-w-3xl z-10">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900">How Universify Works</h2>
          <p className="text-xl text-muted-foreground">Three simple steps to your best UCAS application</p>
        </div>

        <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center">
           {/* Vertical Connector Line */}
           <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-secondary/50 via-secondary to-green-500 transform md:-translate-x-1/2 hidden md:block"></div>
           {/* Mobile Line */}
           <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-slate-200 md:hidden"></div>

           {/* Step 1 */}
           <div className="relative w-full flex flex-col md:flex-row items-center md:justify-between mb-16 md:mb-24 group">
             {/* Left Content (Text) */}
             <div className="w-full md:w-[45%] pl-16 md:pl-0 md:text-right md:pr-12 order-2 md:order-1">
               <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-white font-bold text-lg mb-4 shadow-md md:ml-auto md:hidden absolute left-1 top-0">
                 1
               </div>
               <div className="hidden md:inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-white font-bold text-xl mb-4 shadow-md">
                 1
               </div>
               <h3 className="text-2xl font-bold text-slate-900 mb-2">Describe your goals</h3>
               <p className="text-lg text-muted-foreground leading-relaxed">
                 Tell us what you&apos;re looking for in a university - course, location, predicted grades, priorities. No forms to fill.
               </p>
             </div>
             
             {/* Center Icon */}
             <div className="absolute left-1 md:left-1/2 transform md:-translate-x-1/2 md:flex items-center justify-center z-10 hidden">
               <div className="w-20 h-20 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 flex items-center justify-center transform transition-transform duration-500 hover:scale-110">
                 <MessageSquare className="w-8 h-8 text-primary" strokeWidth={2.5} />
               </div>
             </div>
             {/* Mobile Icon positioning is tricky if we want exact match, but usually vertical list is easier. 
                 Let's stick to a vertical list for mobile, and the timeline for desktop. 
             */}

             {/* Right Content (Empty for Step 1) */}
             <div className="w-full md:w-[45%] order-3 md:order-3 hidden md:block"></div>
           </div>


           {/* Step 2 */}
           <div className="relative w-full flex flex-col md:flex-row items-center md:justify-between mb-16 md:mb-24 group">
             {/* Left Content (Empty for Step 2) */}
             <div className="w-full md:w-[45%] order-2 md:order-1 hidden md:block"></div>

             {/* Center Icon */}
             <div className="absolute left-1 md:left-1/2 transform md:-translate-x-1/2 md:flex items-center justify-center z-10 hidden">
               <div className="w-20 h-20 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 flex items-center justify-center transform transition-transform duration-500 hover:scale-110">
                 <FileText className="w-8 h-8 text-primary" strokeWidth={2.5} />
               </div>
             </div>

             {/* Right Content (Text) */}
             <div className="w-full md:w-[45%] pl-16 md:pl-12 md:text-left order-2 md:order-3">
                <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-white font-bold text-lg mb-4 shadow-md md:ml-0 md:hidden absolute left-1 top-0">
                 2
               </div>
               <div className="hidden md:inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-white font-bold text-xl mb-4 shadow-md">
                 2
               </div>
               <h3 className="text-2xl font-bold text-slate-900 mb-2">Get matched & write</h3>
               <p className="text-lg text-muted-foreground leading-relaxed">
                 Receive personalized university recommendations with detailed reasoning. Then craft your personal statement with our guidance.
               </p>
             </div>
           </div>


           {/* Step 3 */}
           <div className="relative w-full flex flex-col md:flex-row items-center md:justify-between group">
             {/* Left Content (Text) */}
             <div className="w-full md:w-[45%] pl-16 md:pl-0 md:text-right md:pr-12 order-2 md:order-1">
               <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-secondary text-white font-bold text-lg mb-4 shadow-md md:ml-auto md:hidden absolute left-1 top-0">
                 3
               </div>
               <div className="hidden md:inline-flex items-center justify-center w-12 h-12 rounded-full bg-secondary text-white font-bold text-xl mb-4 shadow-md">
                 3
               </div>
               <h3 className="text-2xl font-bold text-slate-900 mb-2">Improve with AI feedback</h3>
               <p className="text-lg text-muted-foreground leading-relaxed">
                 Upload your statement and get instant feedback guided by analysis of successful applications. Track versions and see your progress.
               </p>
             </div>
             
             {/* Center Icon */}
             <div className="absolute left-1 md:left-1/2 transform md:-translate-x-1/2 md:flex items-center justify-center z-10 hidden">
               <div className="w-20 h-20 bg-white rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.06)] border border-slate-100 flex items-center justify-center transform transition-transform duration-500 hover:scale-110">
                 <CheckCircle2 className="w-8 h-8 text-primary" strokeWidth={2.5} />
               </div>
             </div>

             {/* Right Content (Empty for Step 3) */}
             <div className="w-full md:w-[45%] order-3 md:order-3 hidden md:block"></div>
           </div>
        </div>
      </div>
    </section>
  )
}