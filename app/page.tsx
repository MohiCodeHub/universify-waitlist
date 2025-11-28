import { Hero } from "@/components/landing/Hero"
import { SocialProof } from "@/components/landing/SocialProof"
import { HowItWorks } from "@/components/landing/HowItWorks"
import { Features } from "@/components/landing/Features"
import { UrgencyBanner } from "@/components/landing/UrgencyBanner"
import { EmailSignup } from "@/components/landing/EmailSignup"
import { Footer } from "@/components/landing/Footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col bg-white">
      <nav className="flex items-center justify-between p-6 max-w-7xl mx-auto w-full">
         <div className="flex items-center space-x-2">
           <div className="h-8 w-8 bg-primary rounded-lg flex items-center justify-center text-white font-bold">U</div>
           <span className="text-xl font-bold text-slate-900">Universify</span>
         </div>
         <div className="hidden md:flex items-center space-x-6 text-sm font-medium text-slate-600">
           <a href="#" className="hover:text-primary">Home</a>
           <a href="#" className="hover:text-primary">Uni Matching</a>
           <a href="#" className="hover:text-primary">Statement Reviewer</a>
           <a href="#" className="hover:text-primary">Interview Prep</a>
         </div>
         <div className="flex items-center space-x-4">
            <a href="#" className="text-sm font-medium hover:text-primary hidden md:block">Sign in</a>
            <a href="#waitlist" className="bg-primary text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-primary/90">Join beta</a>
         </div>
      </nav>

      <div id="hero-signup">
        <Hero />
      </div>
      <SocialProof />
      <HowItWorks />
      <Features />
      <UrgencyBanner />
      
      <section id="waitlist" className="w-full py-20 bg-slate-50 border-t border-slate-200">
        <div className="container px-4 md:px-6 mx-auto flex flex-col items-center text-center space-y-8">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tighter text-slate-900">
            Ready to Stop Stressing About UCAS?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl">
            Join 200+ students on the waitlist. We&apos;ll email you the moment Universify launches in December.
          </p>
          <EmailSignup showTipsCheckbox={true} />
          <p className="text-xs text-slate-400">We respect your inbox. No spam, unsubscribe anytime.</p>
          <p className="text-sm font-medium text-slate-600 pt-4">🎓 Built by UCL students, for students</p>
        </div>
      </section>

      <Footer />
    </main>
  )
}