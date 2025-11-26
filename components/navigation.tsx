"use client"

import Link from "next/link"
import { useState } from "react"
import { ChevronDown } from "lucide-react"

const Navigation = () => {
  const [openMenu, setOpenMenu] = useState<string | null>(null)

  const toggleMenu = (menu: string) => {
    setOpenMenu(openMenu === menu ? null : menu)
  }

  return (
    <nav
      style={{
        borderBottom: "2px solid #FFC72C",
        backgroundColor: "white",
        position: "sticky",
        top: 0,
        zIndex: 50,
        boxShadow: "0 2px 8px rgba(255, 199, 44, 0.1)",
      }}
    >
      <div
        style={{
          maxWidth: "80rem",
          margin: "0 auto",
          paddingLeft: "1rem",
          paddingRight: "1rem",
          paddingTop: "1rem",
          paddingBottom: "1rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <a
          href="/"
          style={{
            fontSize: "1.5rem",
            fontWeight: "bold",
            color: "#FFC72C",
            transition: "all 300ms ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.color = "#D97757"
            e.currentTarget.style.transform = "scale(1.05)"
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.color = "#FFC72C"
            e.currentTarget.style.transform = "scale(1)"
          }}
        >
          MEALS
        </a>

        <div className="hidden md:flex items-center gap-8">
          <Link
            href="/"
            style={{
              color: "#8B5A2B",
              fontWeight: "500",
              transition: "all 200ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#D97757"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#8B5A2B"
            }}
          >
            Home
          </Link>

          <div className="relative group">
            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "#8B5A2B",
                fontWeight: "500",
                transition: "all 200ms ease",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#D97757"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#8B5A2B"
              }}
            >
              Categories
              <ChevronDown size={18} />
            </button>
            <div
              className="hidden group-hover:block absolute left-0 top-full bg-white min-w-[200px]"
              style={{
                borderRadius: "0 0 4px 4px",
                border: "2px solid #FFC72C",
                borderTop: "none",
                boxShadow: "0 4px 12px rgba(255, 199, 44, 0.1)",
              }}
            >
              <Link
                href="/categories"
                style={{
                  display: "block",
                  padding: "0.75rem 1rem",
                  color: "#8B5A2B",
                  borderBottom: "2px solid #FFC72C",
                  transition: "all 200ms ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#FFC72C"
                  e.currentTarget.style.color = "#8B5A2B"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "white"
                  e.currentTarget.style.color = "#8B5A2B"
                }}
              >
                All Categories
              </Link>
            </div>
          </div>

          <div className="relative group">
            <button
              style={{
                display: "flex",
                alignItems: "center",
                gap: "0.5rem",
                color: "#8B5A2B",
                fontWeight: "500",
                transition: "all 200ms ease",
                background: "none",
                border: "none",
                cursor: "pointer",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = "#D97757"
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = "#8B5A2B"
              }}
            >
              Areas
              <ChevronDown size={18} />
            </button>
            <div
              className="hidden group-hover:block absolute left-0 top-full bg-white min-w-[200px]"
              style={{
                borderRadius: "0 0 4px 4px",
                border: "2px solid #FFC72C",
                borderTop: "none",
                boxShadow: "0 4px 12px rgba(255, 199, 44, 0.1)",
              }}
            >
              <Link
                href="/areas"
                style={{
                  display: "block",
                  padding: "0.75rem 1rem",
                  color: "#8B5A2B",
                  transition: "all 200ms ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#FFC72C"
                  e.currentTarget.style.color = "#8B5A2B"
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "white"
                  e.currentTarget.style.color = "#8B5A2B"
                }}
              >
                All Areas
              </Link>
            </div>
          </div>

          <Link
            href="/search"
            style={{
              color: "#8B5A2B",
              fontWeight: "500",
              transition: "all 200ms ease",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#D97757"
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#8B5A2B"
            }}
          >
            Search
          </Link>
        </div>

        <button onClick={() => (window.location.href = "/random")} className="button-primary hidden md:inline-block">
          Random Meal
        </button>

        {/* Mobile Menu Button */}
        <button
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "0.25rem",
            background: "none",
            border: "none",
            cursor: "pointer",
          }}
          onClick={() => setOpenMenu(openMenu ? null : "mobile")}
        >
          <div style={{ width: "1.5rem", height: "2px", backgroundColor: "#FFC72C", transition: "all 200ms" }}></div>
          <div style={{ width: "1.5rem", height: "2px", backgroundColor: "#FFC72C", transition: "all 200ms" }}></div>
          <div style={{ width: "1.5rem", height: "2px", backgroundColor: "#FFC72C", transition: "all 200ms" }}></div>
        </button>
      </div>

      {/* Mobile Menu */}
      {openMenu === "mobile" && (
        <div
          className="md:hidden bg-white"
          style={{
            borderRadius: "0 0 4px 4px",
            borderTop: "2px solid #FFC72C",
            animation: "slideInDown 0.3s ease-out",
          }}
        >
          <div
            style={{
              maxWidth: "80rem",
              margin: "0 auto",
              padding: "1rem",
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
            }}
          >
            <Link
              href="/"
              style={{
                color: "#8B5A2B",
                fontWeight: "500",
              }}
            >
              Home
            </Link>
            <Link
              href="/categories"
              style={{
                color: "#8B5A2B",
                fontWeight: "500",
              }}
            >
              Categories
            </Link>
            <Link
              href="/areas"
              style={{
                color: "#8B5A2B",
                fontWeight: "500",
              }}
            >
              Areas
            </Link>
            <Link
              href="/search"
              style={{
                color: "#8B5A2B",
                fontWeight: "500",
              }}
            >
              Search
            </Link>
            <button
              onClick={() => (window.location.href = "/random")}
              className="button-primary"
              style={{ width: "100%" }}
            >
              Random Meal
            </button>
          </div>
        </div>
      )}
    </nav>
  )
}

export default Navigation
