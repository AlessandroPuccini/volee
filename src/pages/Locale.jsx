import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Seo from "../components/Seo"

function Locale() {
  return (
    <>
      <Seo
        title="Il Locale"
        description="Scopri gli spazi di Volée Bologna: un ambiente elegante e versatile per pranzi, cene, aperitivi ed eventi privati."
        path="/il-locale"
      />
      <Navbar />
      <div className="menu-page">
        <h1>Il Nostro Locale</h1>
        </div>
      <Footer />
    </>
  )
}

export default Locale
