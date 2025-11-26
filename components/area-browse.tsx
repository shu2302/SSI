"use client"

import { useState, useEffect } from "react"
import Link from "next/link"

interface Area {
  strArea: string
}

const AreaBrowse = () => {
  const [areas, setAreas] = useState<Area[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchAreas = async () => {
      try {
        const response = await fetch("https://www.themealdb.com/api/json/v1/1/list.php?a=list")
        const data = await response.json()
        if (data.meals) {
          setAreas(data.meals.slice(0, 12))
        }
      } catch (error) {
        console.error("Error fetching areas:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchAreas()
  }, [])

  if (loading) {
    return (
      <section style={{ paddingTop: "4rem", paddingBottom: "4rem", paddingLeft: "1rem", paddingRight: "1rem" }}>
        Loading areas...
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
        backgroundColor: "#FFF5EE",
        borderTop: "2px solid #FFC72C",
      }}
    >
      <div style={{ maxWidth: "80rem", margin: "0 auto" }}>
        <h2 className="section-title">Browse by Area</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: "1rem",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {areas.map((area, index) => (
            <Link
              key={area.strArea}
              href={`/area/${area.strArea}`}
              className="badge"
              style={{
                animationDelay: `${index * 50}ms`,
              }}
            >
              {area.strArea}
            </Link>
          ))}
        </div>
        <div style={{ marginTop: "2rem", textAlign: "center" }}>
          <Link href="/areas" className="button-secondary">
            View All Areas
          </Link>
        </div>
      </div>
    </section>
  )
}

export default AreaBrowse
