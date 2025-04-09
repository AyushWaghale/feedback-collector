'use client'

import { useState } from 'react'
import { submitFeedback } from '../../features/feedback/api'

export default function FeedbackForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)
  const [successMsg, setSuccessMsg] = useState('')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)

    try {
      await submitFeedback(form)
      setForm({ name: '', email: '', message: '' })
      setSuccessMsg('✅ Thank you! Your feedback has been submitted.')
      setTimeout(() => setSuccessMsg(''), 4000)
    } catch (error) {
      setSuccessMsg('❌ Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
  onSubmit={handleSubmit}
  className="space-y-4 p-6 rounded-xl border bg-white text-black 
             dark:bg-gray-800 dark:text-white dark:border-gray-700 shadow"
>
      <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-100">
        Leave your feedback ✍️
      </h2>

      <input
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
        required
        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <input
        name="email"
        placeholder="Email"
        type="email"
        value={form.email}
        onChange={handleChange}
        required
        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <textarea
        name="message"
        placeholder="Your Feedback"
        value={form.message}
        onChange={handleChange}
        required
        rows={4}
        className="w-full p-3 border border-gray-300 dark:border-gray-600 rounded bg-gray-50 dark:bg-gray-700 dark:text-white focus:outline-none focus:ring-2 focus:ring-blue-400"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded transition"
      >
        {loading ? 'Submitting...' : 'Submit Feedback'}
      </button>

      {successMsg && (
        <div className="mt-2 text-center text-sm text-green-600 dark:text-green-400 animate-fade-in">
          {successMsg}
        </div>
      )}
    </form>
  )
}
