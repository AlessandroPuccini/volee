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
            un'esperienza culinaria unica, combinando la tradizione della cucina italiana 
            con un tocco di innovazione.
          </p>
          
          <h2>La Nostra Filosofia</h2>
          <p>
            Crediamo nella qualità degli ingredienti e nella passione per la cucina. 
            Ogni piatto è preparato con cura utilizzando prodotti freschi e di stagione, 
            spesso provenienti da produttori locali selezionati.
          </p>

          <h2>Il Nostro Team</h2>
          <p>
            Il nostro chef ha oltre 15 anni di esperienza nella cucina italiana e 
            internazionale. Insieme al nostro staff dedicato, lavoriamo ogni giorno 
            per offrirvi un servizio eccellente e piatti indimenticabili.
          </p>

          <h2>L'Ambiente</h2>
          <p>
            Il ristorante offre un'atmosfera accogliente e raffinata, perfetta per 
            cene romantiche, pranzi di lavoro o celebrazioni con amici e famiglia.
          </p>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default About
