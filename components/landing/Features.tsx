import { FileCheck, GraduationCap, Mic, Library } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function Features() {
  return (
    <section className="w-full py-20 bg-slate-50">
      <div className="container px-4 md:px-6 mx-auto space-y-12">
        <div className="text-center space-y-4 max-w-3xl mx-auto animate-fade-in-down">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl text-slate-900">Everything You Need for UCAS</h2>
          <p className="text-xl text-muted-foreground">Built by UCL students who remember how stressful applications were</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Feature 1 */}
          <Card className="border-none shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 animate-fade-in-up [animation-delay:0.1s] opacity-0 [animation-fill-mode:forwards]">
            <CardHeader className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <FileCheck className="h-6 w-6 text-primary" />
              </div>
              <CardTitle className="text-2xl">Smart Statement Feedback</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Upload your personal statement and get instant feedback comparing it to 100+ successful essays from your subject. See exactly what Oxford and Imperial applicants wrote about.
              </p>
              <p className="text-primary font-semibold">Know what works before you submit</p>
            </CardContent>
          </Card>

          {/* Feature 2 */}
          <Card className="border-none shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 animate-fade-in-up [animation-delay:0.2s] opacity-0 [animation-fill-mode:forwards]">
            <CardHeader className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Library className="h-6 w-6 text-secondary" />
              </div>
              <CardTitle className="text-2xl">Powered by Real Success Stories</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Our AI is guided by analysis of actual personal statements that got students into top universities. Not generic advice - specific patterns from Computer Science students who got into Imperial, Medicine applicants accepted to Cambridge.
              </p>
              <p className="text-secondary font-semibold">Learn from students who actually got in</p>
            </CardContent>
          </Card>

          {/* Feature 3 */}
          <Card className="border-none shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 animate-fade-in-up [animation-delay:0.3s] opacity-0 [animation-fill-mode:forwards]">
            <CardHeader className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Mic className="h-6 w-6 text-purple-500" />
              </div>
              <CardTitle className="text-2xl">Practice Interviews Out Loud</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Nervous about Oxbridge interviews? Practice with our voice AI that asks follow-up questions just like real interviewers. Get instant feedback on your answers, clarity, and critical thinking.
              </p>
              <p className="text-purple-500 font-semibold">Walk into interviews ready</p>
            </CardContent>
          </Card>

          {/* Feature 4 */}
          <Card className="border-none shadow-lg hover:shadow-xl hover:scale-[1.02] transition-all duration-300 animate-fade-in-up [animation-delay:0.4s] opacity-0 [animation-fill-mode:forwards]">
            <CardHeader className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <GraduationCap className="h-6 w-6 text-blue-500" />
              </div>
              <CardTitle className="text-2xl">Find Your Perfect Universities</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-muted-foreground">
                Chat with our AI about what you want to study, your predicted grades, and what matters to you. Get personalized university recommendations - reach, target, and safety options.
              </p>
              <p className="text-blue-500 font-semibold">No more endless spreadsheets</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
