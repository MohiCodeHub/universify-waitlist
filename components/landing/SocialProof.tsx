import { Users, FileText, Calendar } from "lucide-react"

export function SocialProof() {
  return (
    <section className="w-full py-12 bg-slate-50 border-y border-slate-100">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center space-y-2 p-4 bg-white rounded-lg shadow-sm border border-slate-100">
            <div className="p-2 bg-primary/10 rounded-full">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900">200+</h3>
            <p className="text-sm text-muted-foreground font-medium">Students on the waitlist</p>
          </div>
          
          <div className="flex flex-col items-center text-center space-y-2 p-4 bg-white rounded-lg shadow-sm border border-slate-100">
            <div className="p-2 bg-secondary/10 rounded-full">
              <FileText className="h-6 w-6 text-secondary" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900">100+</h3>
            <p className="text-sm text-muted-foreground font-medium">Successful essays learned</p>
          </div>

          <div className="flex flex-col items-center text-center space-y-2 p-4 bg-white rounded-lg shadow-sm border border-slate-100">
            <div className="p-2 bg-blue-500/10 rounded-full">
              <Calendar className="h-6 w-6 text-blue-500" />
            </div>
            <h3 className="text-3xl font-bold text-slate-900">Jan 31</h3>
            <p className="text-sm text-muted-foreground font-medium">UCAS Deadline 2026</p>
          </div>
        </div>
      </div>
    </section>
  )
}
