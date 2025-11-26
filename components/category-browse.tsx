"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

interface Category {
  strCategory: string
}

const CategoryBrowse = () => {
  const [categories, setCategories] = useState<Category[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?c=list")
        const data = await response.json()
        if (data.meals) {
          setCategories(data.meals.slice(0, 12))
        }
      } catch (error) {
        console.error("Error fetching categories:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchCategories()
  }, [])

  if (loading) {
    return (
      <section style={{ paddingTop: "4rem", paddingBottom: "4rem", paddingLeft: "1rem", paddingRight: "1rem" }}>
        Loading categories...
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
        backgroundColor: "#FDF8F3",
      }}
    >
      <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
        <h2 className="section-title">Browse by Category</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {categories.map((category, index) => (
            <Link
              key={category.strCategory}
              href={`/category/${category.strCategory}`}
              className="badge"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              {category.strCategory}
            </Link>
          ))}
        </div>
        <div style={{ marginTop: "2rem", textAlign: "center" }}>
          <Link href="/categories" className="button-secondary">
            View All Categories
          </Link>
        </div>
      </div>
    </section>
  )
}

export default CategoryBrowse
