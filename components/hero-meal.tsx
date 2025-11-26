"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"

interface Meal {
  idMeal: string
  strMeal: string
  strMealThumb: string
}

const HeroMeal = () => {
  const [meal, setMeal] = useState<Meal | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchRandomMeal = async () => {
      try {
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php")
        const data = await response.json()
        if (data.meals) {
          setMeal(data.meals[0])
        }
      } catch (error) {
        console.error("Error fetching meal:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchRandomMeal()
  }, [])

  if (loading) {
    return (
      <section
        style={{
          paddingTop: "4rem",
          paddingBottom: "4rem",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          background: "linear-gradient(135deg, #FFC72C 0%, #D97757 100%)",
          color: "white",
        }}
      >
        <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignItems: "center" }}>
            <div>
              <div
                style={{
                  height: "3.75rem",
                  backgroundColor: "rgba(255, 255, 255, 0.3)",
                  borderRadius: "4px",
                  marginBottom: "1rem",
                  animation: "pulse 2s ease-in-out infinite",
                }}
              />
              <div
                style={{
                  height: "2rem",
                  backgroundColor: "rgba(255, 255, 255, 0.3)",
                  borderRadius: "4px",
                  marginBottom: "1.5rem",
                  animation: "pulse 2s ease-in-out infinite",
                  animationDelay: "0.1s",
                }}
              />
              <div
                style={{
                  height: "2.5rem",
                  width: "150px",
                  backgroundColor: "rgba(255, 255, 255, 0.3)",
                  borderRadius: "4px",
                  animation: "pulse 2s ease-in-out infinite",
                  animationDelay: "0.2s",
                }}
              />
            </div>
            <div
              style={{
                aspectRatio: "1",
                backgroundColor: "rgba(255, 255, 255, 0.3)",
                borderRadius: "4px",
                border: "3px solid rgba(255, 255, 255, 0.5)",
                animation: "pulse 2s ease-in-out infinite",
                animationDelay: "0.3s",
              }}
            />
          </div>
        </div>
      </section>
    )
  }

  return (
    <section
      style={{
        paddingTop: "4rem",
        paddingBottom: "4rem",
        paddingLeft: "1rem",
        paddingRight: "1rem",
        background: "linear-gradient(135deg, #FFC72C 0%, #D97757 100%)",
        color: "#8B5A2B",
      }}
    >
      <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "2rem", alignItems: "center" }}>
          <div style={{ animation: "slideInDown 0.6s ease-out" }}>
            <h1
              style={{
                fontSize: "3.75rem",
                fontWeight: "bold",
                marginBottom: "1rem",
                color: "white",
              }}
            >
              Featured Meal
            </h1>
            {meal && (
              <>
                <h2
                  style={{
                    fontSize: "1.875rem",
                    marginBottom: "1.5rem",
                    fontWeight: "300",
                    color: "white",
                  }}
                >
                  {meal.strMeal}
                </h2>
                <Link href={`/meal/${meal.idMeal}`} className="button-secondary">
                  View Recipe
                </Link>
              </>
            )}
          </div>
          {meal && (
            <div
              style={{
                aspectRatio: "1",
                overflow: "hidden",
                borderRadius: "4px",
                border: "3px solid white",
                animation: "slideIn 0.6s ease-out 0.2s both",
              }}
            >
              <Image
                src={meal.strMealThumb || "/placeholder.svg"}
                alt={meal.strMeal}
                width={500}
                height={500}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

export default HeroMeal
