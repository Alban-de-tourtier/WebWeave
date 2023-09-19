'use client'
import NavBar from "../_component/NavBar/Navbar"
import Footer from "../_component/Footer/Footer"

export default function GlobaleLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        <NavBar />
        {children}
        <Footer />
      </section>
    )
  }