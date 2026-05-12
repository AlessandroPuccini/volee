import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import Seo from "../components/Seo"

function About() {
  return (
    <>
      <Seo
        title="Chi Siamo"
        description="Conosci Volée Bologna: identità, storia e visione di un ristorante e cocktail bar dedicato alla convivialità."
        path="/chi-siamo"
      />
      <Navbar />
      <div className="about-page">
        <h1>Chi Siamo</h1>
        <section className="about-content">
          <h2>La Nostra Storia</h2>
          <p>
            Benvenuti al Ristorante Volée! Da oltre 20 anni offriamo ai nostri clienti 
            un'esperienza culinaria unica.
          </p>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default About
