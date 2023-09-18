'use client'
import NavBar from "../_component/NavBar/Navbar"

export default function GlobaleLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <NavBar />
        {children}
      </section>
    )
  }