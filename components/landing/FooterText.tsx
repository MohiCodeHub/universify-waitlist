"use client"

import { IoMdSchool } from "react-icons/io"

export function FooterText() {
  return (
    <p className="text-sm font-medium text-slate-600 pt-4 flex items-center justify-center gap-2">
      <IoMdSchool className="text-lg" />
      Built by UCL students, for students
    </p>
  )
}

