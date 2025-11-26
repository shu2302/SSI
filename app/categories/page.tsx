"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Spinner from "@/components/spinner"

interface Category {
  strCategory: string
}

export default function CategoriesPage() {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
        const data = await response.json()
        if (data.meals) {
          setCategories(data.meals)
        }
      } catch (error) {
        console.error("Error:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchCategories()
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="section-title">All Categories</h1>
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <Spinner />
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {categories.map((category) => (
              <Link
                key={category.strCategory}
                href={`/category/${category.strCategory}`}
                className="card p-6 text-center hover:bg-black hover:text-white transition-colors duration-200"
              >
                <p className="font-semibold">{category.strCategory}</p>
              </Link>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
