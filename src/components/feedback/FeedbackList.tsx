// src/components/feedback/FeedbackList.tsx
'use client'

import { useEffect, useState } from 'react'
import { getFeedbacks } from '../../features/feedback/api'

type Feedback = {
  name: string
  email: string
  message: string
  timestamp: string
}

export default function FeedbackList() {
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData() {
      const data = await getFeedbacks()
      setFeedbacks(data)
      setLoading(false)
    }

    fetchData()
  }, [])

  if (loading) return <p>Loading feedback...</p>
  if (!feedbacks.length) return <p>No feedback yet.</p>

  return (
    <div className="space-y-4">
      {feedbacks.map((fb, index) => (
        <div key={index} className="p-4 border rounded bg-white shadow">
          <p className="font-semibold">{fb.name} ({fb.email})</p>
          <p className="text-sm text-gray-600">{new Date(fb.timestamp).toLocaleString()}</p>
          <p className="mt-2">{fb.message}</p>
        </div>
      ))}
    </div>
  )
}
