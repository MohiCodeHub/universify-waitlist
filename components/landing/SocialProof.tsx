"use client"

import { IoMdLocate, IoMdFlash, IoMdCalendar } from "react-icons/io"

export function SocialProof() {
  return (
    <section className="w-full py-12 bg-slate-50 border-y border-slate-100">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center space-y-4 p-6 bg-white rounded-lg shadow-sm border border-slate-100 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in-up [animation-delay:0.1s] opacity-0 [animation-fill-mode:forwards]">
            <IoMdLocate className="text-4xl text-primary animate-float" />
            <h3 className="text-xl font-bold text-slate-900">Find universities that fit YOU</h3>
          </div>
          
          <div className="flex flex-col items-center text-center space-y-4 p-6 bg-white rounded-lg shadow-sm border border-slate-100 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in-up [animation-delay:0.2s] opacity-0 [animation-fill-mode:forwards]">
            <IoMdFlash className="text-4xl text-primary animate-float [animation-delay:0.5s]" />
            <h3 className="text-xl font-bold text-slate-900">Get feedback in minutes, not weeks</h3>
          </div>

          <div className="flex flex-col items-center text-center space-y-4 p-6 bg-white rounded-lg shadow-sm border border-slate-100 hover:shadow-lg hover:scale-105 transition-all duration-300 animate-fade-in-up [animation-delay:0.3s] opacity-0 [animation-fill-mode:forwards]">
            <IoMdCalendar className="text-4xl text-primary animate-float [animation-delay:1s]" />
            <h3 className="text-xl font-bold text-slate-900">Beat the Jan 31 deadline</h3>
          </div>
        </div>
      </div>
    </section>
  )
}