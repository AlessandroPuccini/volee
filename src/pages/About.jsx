import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function About() {
  return (
    <>
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
