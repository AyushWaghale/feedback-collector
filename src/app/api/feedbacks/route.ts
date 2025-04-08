// src/app/api/feedbacks/route.ts
import { supabase } from '../../../lib/supabase'
import { NextResponse } from 'next/server'

export async function GET() {
  const { data, error } = await supabase
    .from('feedbacks')
    .select('*')
    .order('timestamp', { ascending: false })

  if (error) {
    console.error(error)
    return NextResponse.json({ success: false, error }, { status: 500 })
  }

  return NextResponse.json(data)
}
