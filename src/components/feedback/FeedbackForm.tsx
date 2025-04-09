'use client'

import { useState } from 'react'
import { toast } from 'sonner'
import { submitFeedback } from '../../features/feedback/api'

export default function FeedbackForm() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [loading, setLoading] = useState(false)

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
      toast.success('✅ Feedback submitted successfully!')
    } catch (error) {
      toast.error('❌ Something went wrong. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-4 p-6 rounded-xl border shadow"
      style={{
        backgroundColor: 'var(--background)',
        color: 'var(--foreground)',
      }}
    >
      <h2 className="text-xl font-semibold">Leave your feedback ✍️</h2>

      <input
        name="name"
        placeholder="Full Name"
        value={form.name}
        onChange={handleChange}
        required
        className="w-full p-3 border rounded bg-transparent focus:outline-none"
      />

      <input
        name="email"
        placeholder="Email"
        type="email"
        value={form.email}
        onChange={handleChange}
        required
        className="w-full p-3 border rounded bg-transparent focus:outline-none"
      />

      <textarea
        name="message"
        placeholder="Your Feedback"
        value={form.message}
        onChange={handleChange}
        required
        rows={4}
        className="w-full p-3 border rounded bg-transparent focus:outline-none"
      />

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-green-600 hover:bg-green-700 text-white font-medium py-2 rounded transition"
      >
        {loading ? 'Submitting...' : 'Submit Feedback'}
      </button>
    </form>
  )
}
