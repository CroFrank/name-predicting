'use client'

import { useRouter } from "next/navigation"
import { FormEvent, useState } from "react"

export default function Home() {
  const [input, setInput] = useState('')
  const router = useRouter()

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    router.push(`/prediction/${input}`)
  }

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-lg mx-auto mt-8 p-6 bg-white rounded-lg shadow-md w-2/4">
        <h1 className="text-3xl font-semibold text-center mb-6">Name Prediction</h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">Choose a name for prediction</label>
            <input
              id="name"
              type="text"
              placeholder='Enter name'
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:border-blue-500"
            />
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
            >
              Show predictions
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}
