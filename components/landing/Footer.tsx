
export function Footer() {
  return (
    <footer className="w-full py-12 bg-slate-950 text-slate-300">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center space-y-6">
          <div className="space-y-2">
            <h3 className="text-2xl font-bold text-white">Universify</h3>
            <p className="text-sm text-slate-400">
              AI-powered UCAS applications.
              <br />
              From course discovery to offer.
            </p>
          </div>
          
          <p className="text-sm text-slate-400">Made by UCL students 🎓</p>
        </div>
        <div className="mt-8 pt-8 border-t border-slate-800 text-center text-sm text-slate-500">
          <p>© 2025 Universify. Launching December 2025.</p>
        </div>
      </div>
    </footer>
  )
}