"use client"

import { useEffect } from "react"

export default function RandomPage() {
  useEffect(() => {
    const fetchRandomMeal = async () => {
      try {
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        const data = await response.json()
        if (data.meals) {
          window.location.href = `/meal/${data.meals[0].idMeal}`
        }
      } catch (error) {
        console.error("Error:", error)
        window.location.href = "/"
      }
    }

    fetchRandomMeal()
  }, [])

  return (
    <div className="flex items-center justify-center min-h-screen">
      <p className="text-xl">Fetching random meal...</p>
    </div>
  )
}
