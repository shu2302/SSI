"use client"
import Navigation from "@/components/navigation"
import HeroMeal from "@/components/hero-meal"
import CategoryBrowse from "@/components/category-browse"
import AreaBrowse from "@/components/area-browse"
import Footer from "@/components/footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Navigation />
      <main>
        <HeroMeal />
        <CategoryBrowse />
        <AreaBrowse />
      </main>
      <Footer />
    </div>
  )
}
