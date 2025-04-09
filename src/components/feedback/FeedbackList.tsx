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

  if (loading)
    return (
      <p className="text-center text-gray-600 dark:text-gray-400">
        Loading feedback...
      </p>
    )

  if (!feedbacks.length)
    return (
      <p className="text-center text-gray-600 dark:text-gray-400">
        No feedback yet.
      </p>
    )

  return (
    <div className="space-y-4">
      {feedbacks.map((fb, index) => (
        <div
        key={index}
        className="p-4 rounded-lg border shadow-sm bg-white text-black 
                   dark:bg-gray-800 dark:text-white dark:border-gray-700 
                   hover:shadow-md transition-all duration-300"
      >
          <div className="flex justify-between items-center mb-1">
            <p className="font-semibold text-gray-900 dark:text-white">
              {fb.name}
            </p>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              {new Date(fb.timestamp).toLocaleString()}
            </p>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-300 italic mb-2">
            {fb.email}
          </p>
          <p className="text-gray-800 dark:text-gray-100">{fb.message}</p>
        </div>
      ))}
    </div>
  )
}
