"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams } from "next/navigation"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import { ArrowLeft, Youtube } from "lucide-react"
import Spinner from "@/components/spinner"

interface Meal {
  idMeal: string
  strMeal: string
  strMealThumb: string
  strCategory: string
  strArea: string
  strInstructions: string
  strYoutube: string
  [key: string]: string
}

export default function MealPage() {
  const params = useParams()
  const id = params.id as string
  const [meal, setMeal] = useState<Meal | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchMeal = async () => {
      try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
        const data = await response.json()
        if (data.meals) {
          setMeal(data.meals[0])
        }
      } catch (error) {
        console.error("Error:", error)
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchMeal()
    }
  }, [id])

  if (loading) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <main className="max-w-7xl mx-auto px-4 py-12 flex items-center justify-center min-h-96">
          <Spinner />
        </main>
        <Footer />
      </div>
    )
  }

  if (!meal) {
    return (
      <div className="min-h-screen bg-white">
        <Navigation />
        <main className="max-w-7xl mx-auto px-4 py-12">
          <p>Meal not found.</p>
        </main>
        <Footer />
      </div>
    )
  }

  // Extract ingredients
  const ingredients = []
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`]
    const measure = meal[`strMeasure${i}`]
    if (ingredient) {
      ingredients.push({ ingredient, measure })
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <Link href="/" className="inline-flex items-center gap-2 text-black hover:text-gray-600 mb-8 font-medium">
          <ArrowLeft size={20} />
          Back Home
        </Link>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <div>
            <Image
              src={meal.strMealThumb || "/placeholder.svg"}
              alt={meal.strMeal}
              width={600}
              height={600}
              className="w-full aspect-square object-cover"
            />
          </div>

          <div>
            <h1 className="text-5xl font-bold mb-4">{meal.strMeal}</h1>
            <div className="flex gap-4 mb-8">
              <div className="border border-black px-4 py-2">
                <p className="text-sm text-gray-600">Category</p>
                <p className="font-semibold">{meal.strCategory}</p>
              </div>
              <div className="border border-black px-4 py-2">
                <p className="text-sm text-gray-600">Area</p>
                <p className="font-semibold">{meal.strArea}</p>
              </div>
            </div>

            <h2 className="text-2xl font-bold mb-4">Ingredients</h2>
            <ul className="space-y-2 mb-8">
              {ingredients.map((item, idx) => (
                <li key={idx} className="flex justify-between border-b border-gray-200 pb-2">
                  <span>{item.ingredient}</span>
                  <span className="text-gray-600">{item.measure}</span>
                </li>
              ))}
            </ul>

            {meal.strYoutube && (
              <a
                href={meal.strYoutube}
                target="_blank"
                rel="noopener noreferrer"
                className="button-secondary inline-flex items-center gap-2"
              >
                <Youtube size={20} />
                Watch Video
              </a>
            )}
          </div>
        </div>

        <div className="border-t border-black pt-8">
          <h2 className="text-3xl font-bold mb-6">Instructions</h2>
          <p className="text-lg leading-relaxed text-gray-800 whitespace-pre-wrap">{meal.strInstructions}</p>
        </div>
      </main>
      <Footer />
    </div>
  )
}
