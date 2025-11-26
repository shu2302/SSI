"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Navigation from "@/components/navigation"
import Footer from "@/components/footer"
import Spinner from "@/components/spinner"

interface Area {
  strArea: string
}

export default function AreasPage() {
  const [areas, setAreas] = useState<Area[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAreas = async () => {
      try {
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
        const data = await response.json()
        if (data.meals) {
          setAreas(data.meals)
        }
      } catch (error) {
        console.error("Error:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchAreas()
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="section-title">All Areas</h1>
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <Spinner />
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {areas.map((area) => (
              <Link
                key={area.strArea}
                href={`/area/${area.strArea}`}
                className="card p-6 text-center bg-white hover:bg-black hover:text-white transition-colors duration-200"
              >
                <p className="font-semibold">{area.strArea}</p>
              </Link>
            ))}
          </div>
        )}
      </main>
      <Footer />
    </div>
  )
}
