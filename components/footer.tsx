"use client"

const Footer = () => {
  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #D97757 0%, #B85A3A 100%)",
        color: "white",
        borderTop: "3px solid #FFC72C",
      }}
    >
      <div style={{ maxWidth: "80rem", margin: "0 auto", padding: "3rem 1rem" }}>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "2rem",
            marginBottom: "2rem",
          }}
        >
          <div style={{ animation: "slideIn 0.5s ease-out" }}>
            <h3 style={{ fontWeight: "bold", fontSize: "1.125rem", marginBottom: "1rem", color: "#FFC72C" }}>MEALS</h3>
            <p style={{ color: "#FDF8F3" }}>Discover recipes from around the world.</p>
          </div>
          <div style={{ animation: "slideIn 0.5s ease-out 0.1s both" }}>
            <h4 style={{ fontWeight: "bold", marginBottom: "1rem", color: "#FFC72C" }}>Explore</h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <li>
                <a
                  href="/categories"
                  style={{
                    color: "#FDF8F3",
                    transition: "all 200ms ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#FFC72C"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#FDF8F3"
                  }}
                >
                  Categories
                </a>
              </li>
              <li>
                <a
                  href="/areas"
                  style={{
                    color: "#FDF8F3",
                    transition: "all 200ms ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#FFC72C"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#FDF8F3"
                  }}
                >
                  Areas
                </a>
              </li>
              <li>
                <a
                  href="/search"
                  style={{
                    color: "#FDF8F3",
                    transition: "all 200ms ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#FFC72C"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#FDF8F3"
                  }}
                >
                  Search
                </a>
              </li>
            </ul>
          </div>
          <div style={{ animation: "slideIn 0.5s ease-out 0.2s both" }}>
            <h4 style={{ fontWeight: "bold", marginBottom: "1rem", color: "#FFC72C" }}>Quick Links</h4>
            <ul style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
              <li>
                <a
                  href="/"
                  style={{
                    color: "#FDF8F3",
                    transition: "all 200ms ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#FFC72C"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#FDF8F3"
                  }}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/random"
                  style={{
                    color: "#FDF8F3",
                    transition: "all 200ms ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.color = "#FFC72C"
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.color = "#FDF8F3"
                  }}
                >
                  Random Meal
                </a>
              </li>
            </ul>
          </div>
          <div style={{ animation: "slideIn 0.5s ease-out 0.3s both" }}>
            <h4 style={{ fontWeight: "bold", marginBottom: "1rem", color: "#FFC72C" }}>About</h4>
            <p style={{ color: "#FDF8F3", fontSize: "0.875rem" }}>
              TheMealDB Explorer is a recipe discovery platform powered by TheMealDB API.
            </p>
          </div>
        </div>
        <div
          style={{
            borderTop: "1px solid rgba(255, 199, 44, 0.2)",
            paddingTop: "2rem",
            textAlign: "center",
            color: "#FDF8F3",
          }}
        >
          <p>&copy; 2025 TheMealDB Explorer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
