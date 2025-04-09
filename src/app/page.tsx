'use client'

import FeedbackForm from '../components/feedback/FeedbackForm'
import FeedbackList from '../components/feedback/FeedbackList'
import ThemeToggle from '../components/ui/themeToggle'
import { useState } from 'react'

export default function HomePage() {
  const [showFeedbacks, setShowFeedbacks] = useState(false)

  return (
    <main
      className="min-h-screen flex flex-col"
      style={{
        backgroundColor: 'var(--background)',
        color: 'var(--foreground)',
      }}
    >
      {/* Content */}
      <div className="flex-grow p-4">
        <div className="max-w-xl mx-auto space-y-6">
          {/* <div className="flex justify-end">
            <ThemeToggle />
          </div> */}

          <h1 className="text-3xl font-bold text-center">Feedback Collector</h1>

          <button
            onClick={() => setShowFeedbacks(!showFeedbacks)}
            className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
          >
            {showFeedbacks ? 'Hide' : 'View'} Submitted Feedback
          </button>

          {showFeedbacks ? <FeedbackList /> : <FeedbackForm />}
        </div>
      </div>

      {/* Footer */}
      <footer className="py-4 text-center text-sm opacity-60">
        Created by Ayush Waghale – Submitted on 9/4/2025
      </footer>
    </main>
  )
}
