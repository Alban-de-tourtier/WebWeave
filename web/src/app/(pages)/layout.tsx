'use client'
import NavBar from "../_component/NavBar/Navbar"

export default function GlobaleLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
        <NavBar />
        {children}
      </section>
    )
  }