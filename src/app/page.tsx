// src/app/page.tsx
'use client'

import FeedbackForm from '@/components/feedback/FeedbackForm'
import FeedbackList from '@/components/feedback/FeedbackList'
import { useState } from 'react'

export default function HomePage() {
  const [showFeedbacks, setShowFeedbacks] = useState(false)

  return (
    <main className="min-h-screen bg-gray-100 text-gray-800 p-4">
      <div className="max-w-xl mx-auto space-y-6">
        <h1 className="text-3xl font-bold text-center">Feedback Collector</h1>
        <button
          onClick={() => setShowFeedbacks(!showFeedbacks)}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          {showFeedbacks ? 'Hide' : 'View'} Submitted Feedback
        </button>

        {showFeedbacks ? <FeedbackList /> : <FeedbackForm />}
        <footer className="pt-10 text-center text-sm opacity-60">
          Created by [Your Name] – Submitted on [Date]
        </footer>
      </div>
    </main>
  )
}
