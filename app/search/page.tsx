"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"

interface Meal {
  idMeal: string
  strMeal: string
  strMealThumb: string
}

export default function SearchPage() {
  const [query, setQuery] = useState("")
  const [results, setResults] = useState<Meal[]>([])
  const [loading, setLoading] = useState(false)
  const [searched, setSearched] = useState(false)

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!query.trim()) return

    setLoading(true)
    setSearched(true)
    try {
      const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`)
      const data = await response.json()
      setResults(data.meals || [])
    } catch (error) {
      console.error("Error:", error)
      setResults([])
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="section-title mb-8">Search Meals</h1>

        <form onSubmit={handleSearch} className="mb-12">
          <div className="flex gap-2">
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search meals…"
              className="input-field flex-1"
            />
            <button type="submit" className="button-secondary">
              Search
            </button>
          </div>
        </form>

        {loading && (
          <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "1rem", padding: "3rem" }}>
            <div className="loader-spinner" />
            <p style={{ fontSize: "1.125rem", color: "#d97757", fontWeight: "600" }}>Searching meals...</p>
          </div>
        )}

        {searched && !loading && results.length === 0 && <p className="text-center text-gray-600">No meals found.</p>}

        {results.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {results.map((meal, index) => (
              <Link
                key={meal.idMeal}
                href={`/meal/${meal.idMeal}`}
                className="card overflow-hidden hover:shadow-lg transition-shadow"
                style={{ animationDelay: `${index * 0.1}s` }}
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
