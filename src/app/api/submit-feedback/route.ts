// src/app/api/submit-feedback/route.ts
import { supabase } from '../../../lib/supabase'
import { NextResponse } from 'next/server'

export async function POST(req: Request) {
  const data = await req.json()

  const { error } = await supabase.from('feedbacks').insert([
    {
      name: data.name,
      email: data.email,
      message: data.message,
    },
  ])

  if (error) {
    console.error(error)
    return NextResponse.json({ success: false, error }, { status: 500 })
  }

  return NextResponse.json({ success: true })
}
