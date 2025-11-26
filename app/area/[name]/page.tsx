"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Spinner from "@/components/spinner"

interface Meal {
  idMeal: string
  strMeal: string
  strMealThumb: string
}

export default function AreaPage() {
  const params = useParams()
  const area = params.name as string
  const [meals, setMeals] = useState<Meal[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMeals = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?a=${area}`)
        const data = await response.json()
        setMeals(data.meals || [])
      } catch (error) {
        console.error("Error:", error)
      } finally {
        setLoading(false)
      }
    }

    if (area) {
      fetchMeals()
    }
  }, [area])

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="section-title">{area}</h1>
        {loading ? (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", padding: "3rem" }}>
            <Spinner />
            <p style={{ fontSize: "1.125rem", color: "#d97757", fontWeight: "600" }}>Loading meals...</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {meals.map((meal) => (
              <Link
                key={meal.idMeal}
                href={`/meal/${meal.idMeal}`}
                className="card overflow-hidden hover:shadow-lg transition-shadow"
              >
                <div className="aspect-square overflow-hidden">
                  <Image
                    src={meal.strMealThumb || "/placeholder.svg"}
                    alt={meal.strMeal}
                    width={300}
                    height={300}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg">{meal.strMeal}</h3>
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
