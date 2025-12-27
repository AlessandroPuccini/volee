import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Link } from 'react-router-dom'

function Home() {
  
  // URL Cloudinary - sostituisci con la tua immagine
  const heroImageUrl = "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=1600&h=900&fit=crop"

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

      
      <Footer />
    </>
  )
}

export default Home
