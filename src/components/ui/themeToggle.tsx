// src/components/ui/ThemeToggle.tsx
'use client'

import { useTheme } from '../../theme/usetheme'

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="px-4 py-2 rounded bg-gray-200 dark:bg-gray-800 dark:text-white transition"
    >
      {theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode'}
    </button>
  )
}
