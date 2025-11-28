import Link from "next/link"
import { Twitter, Linkedin, Mail } from "lucide-react"

export function Footer() {
  return (
    <footer className="w-full py-12 bg-slate-950 text-slate-300">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold text-white">Universify</h3>
            <p className="text-sm text-slate-400">
              AI-powered UCAS applications.
              <br />
              From course discovery to offer.
            </p>
          </div>
          
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-white">Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link href="#" className="hover:text-white transition-colors">How it Works</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Features</Link></li>
              <li><Link href="#" className="hover:text-white transition-colors">Contact</Link></li>
            </ul>
          </div>

          <div className="space-y-4">
             <h4 className="text-lg font-semibold text-white">Connect</h4>
             <div className="flex space-x-4">
               <Link href="#" className="hover:text-white transition-colors"><Twitter className="h-5 w-5" /></Link>
               <Link href="#" className="hover:text-white transition-colors"><Linkedin className="h-5 w-5" /></Link>
               <Link href="#" className="hover:text-white transition-colors"><Mail className="h-5 w-5" /></Link>
             </div>
             <p className="text-sm text-slate-400">Made by UCL students 🎓</p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>© 2025 Universify. Launching December 2025.</p>
        </div>
      </div>
    </footer>
  )
}
