
export function SocialProof() {
  return (
    <section className="w-full py-12 bg-slate-50 border-y border-slate-100">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center space-y-4 p-6 bg-white rounded-lg shadow-sm border border-slate-100">
            <span className="text-4xl">🎯</span>
            <h3 className="text-xl font-bold text-slate-900">Find universities that fit YOU</h3>
          </div>
          
          <div className="flex flex-col items-center text-center space-y-4 p-6 bg-white rounded-lg shadow-sm border border-slate-100">
            <span className="text-4xl">⚡</span>
            <h3 className="text-xl font-bold text-slate-900">Get feedback in minutes, not weeks</h3>
          </div>

          <div className="flex flex-col items-center text-center space-y-4 p-6 bg-white rounded-lg shadow-sm border border-slate-100">
            <span className="text-4xl">🗓️</span>
            <h3 className="text-xl font-bold text-slate-900">Beat the Jan 31 deadline</h3>
          </div>
        </div>
      </div>
    </section>
  )
}