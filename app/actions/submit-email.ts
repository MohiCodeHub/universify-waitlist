'use server'

import { supabase } from "@/lib/supabase"

export async function submitEmail(email: string) {
  try {
    const { error } = await supabase
      .from('email_signups')
      .insert({ email })

    if (error) {
      console.error('Supabase error:', error)
      
      if (error.code === '23505') { // PostgreSQL unique constraint violation code
        return { success: false, message: "You're already on the list!" }
      }
      
      return { success: false, message: error.message }
    }

    return { success: true }
  } catch (error) {
    console.error('Unexpected error:', error)
    return { success: false, message: 'An unexpected error occurred' }
  }
}
