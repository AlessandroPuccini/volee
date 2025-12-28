import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Link } from 'react-router-dom'

function Home() {
  
  // URL Cloudinary - sostituisci con la tua immagine
  const heroImageUrl = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&h=900&fit=crop"
  const overviewImageUrl = "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1600&h=900&fit=crop"

  return (
    <>
      <Navbar />
      <section className="hero-fullscreen" style={{ backgroundImage: `url(${heroImageUrl})` }}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Benvenuti al Volée</h1>
          <p className="hero-subtitle">Dove la tradizione italiana incontra l'eccellenza culinaria</p>
          {/* <Link to="/menu" className="cta-button">Scopri il Menu</Link> */}
        </div>
      </section>

      <section className="overview" style={{ backgroundImage: `url(${overviewImageUrl})` }}>
        <div className="overview-overlay"></div>
        <div className="overview-content">
          <h2>I Nostri Punti di Forza</h2>
          <div className="features">
            <div className="feature">
              <h2>🍸 Bar</h2>
              <p>Cocktail selezionati e bevande di qualità per ogni occasione</p>
            </div>
            <div className="feature">
              <h2>📍 Location</h2>
              <p>Una location affascinante che crea l'atmosfera perfetta</p>
            </div>
            <div className="feature">
              <h2>🎉 Eventi</h2>
              <p>Ospititamo gli eventi più esclusivi e indimenticabili</p>
            </div>
            <div className="feature">
              <h2>🍽️ Ristorante</h2>
              <p>Cucina italiana autentica con ingredienti selezionati</p>
            </div>
          </div>
        </div>
      </section>

      
      <Footer />
    </>
  )
}

export default Home
