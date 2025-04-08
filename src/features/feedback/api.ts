// src/features/feedback/api.ts

export const submitFeedback = async (data: {
    name: string
    email: string
    message: string
  }) => {
    const res = await fetch('/api/submit-feedback', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
    return res.json()
  }
  
  export const getFeedbacks = async () => {
    const res = await fetch('/api/feedbacks')
    return res.json()
  }
  
    