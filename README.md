
```md
📝 Feedback Collector

A simple and elegant feedback collection app built with Next.js 14 (App Router), Supabase, and Tailwind CSS. Users can submit feedback, and admins (or anyone) can view it live with a dark/light theme toggle.



✨ Features

- 🔥 Built with Next.js App Router (`app/` directory)
- 💾 Stores feedback in **Supabase**
- 🎨 Responsive UI with **Tailwind CSS**
- 🌗 Theme toggle (Light/Dark mode)
- ✅ Snackbar-style success message on feedback submission
- 🚀 Deployed on **netlify**



📦 Tech Stack

| Tool         | Description                            |
|--------------|----------------------------------------|
| Next.js      | React Framework (App Router)           |
| Tailwind CSS | Utility-first CSS framework            |
| Supabase     | Backend-as-a-service (Postgres + API)  |
| netlify       | Deployment platform                    |



 🛠️ Setup Instructions

1. Clone the Repository

```bash
git clone https://github.com/your-username/feedback-collector.git
cd feedback-collector
```

2. Install Dependencies


npm install
# or
yarn install


3. Create a `.env.local` File


NEXT_PUBLIC_SUPABASE_URL=https://your-project.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=your-supabase-anon-key

Get these keys from your [Supabase project dashboard](https://app.supabase.com/).

4. Supabase Database Setup

Create a table named `feedbacks` in Supabase with the following schema:

| Field     | Type      |
|-----------|-----------|
| name      | text      |
| email     | text      |
| message   | text      |
| timestamp | timestamptz (default: now()) |

5. Start the Dev Server


npm run dev


Navigate to `http://localhost:3000` in your browser.



 🚀 Deployment (netlify)

1. Push your code to GitHub.
2. Go to [netlify.com](https://netlify.com), import your GitHub repo.
3. In **Project Settings > Environment Variables**, add:
   - `NEXT_PUBLIC_SUPABASE_URL`
   - `NEXT_PUBLIC_SUPABASE_ANON_KEY`
4. Click **Deploy** and you’re live!



---

## 💡 Improvements Coming Soon

- 🔐 Authenticated admin dashboard
- 🧹 Feedback deletion & moderation
- 📊 Analytics panel for feedback insights
- 📧 Email alerts for new feedback

---

## 🧑‍💻 Author

**Ayush Waghale**  
GitHub: [@ayushwaghale](https://github.com/ayushwaghale)

---

## 📜 License

MIT License. Free to use and modify.

---

## 🙌 Feedback

If you have suggestions or find bugs, feel free to [open an issue](https://github.com/your-username/feedback-collector/issues)!

