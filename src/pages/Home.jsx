import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Home() {
  
  // URL Cloudinary - sostituisci con la tua immagine
  const heroImageUrl = "https://res.cloudinary.com/dmxjn7rsc/image/upload/v1759759756/movies/donnasola3.png"
  const overviewImageUrl = "https://res.cloudinary.com/dmxjn7rsc/image/upload/v1759759671/movies/donnasola.png"
  const welcomeImageUrl = "https://res.cloudinary.com/dmxjn7rsc/image/upload/v1750754435/samples/food/fish-vegetables.jpg"

  // Galleria con immagini di diverse dimensioni
  const galleryImages = [
    { id: 1, url: "https://images.unsplash.com/photo-1424847651672-bf20a4b0982b?w=800&h=1000&fit=crop", span: "span 1" },
    { id: 2, url: "https://res.cloudinary.com/dmxjn7rsc/image/upload/v1760019339/stills/tavola.jpg", span: "span 2" },
    { id: 3, url: "https://res.cloudinary.com/dmxjn7rsc/image/upload/v1759759713/movies/donnasola1.png", span: "span 1" },
    { id: 4, url: "https://res.cloudinary.com/dmxjn7rsc/image/upload/v1751984111/stills/apple.png", span: "span 1" },
    { id: 5, url: "https://res.cloudinary.com/dmxjn7rsc/image/upload/v1752066160/stills/interiorD4.png", span: "span 2" },
    { id: 6, url: "https://res.cloudinary.com/dmxjn7rsc/image/upload/v1752066143/stills/interiorD3.jpg", span: "span 1" },
  ]

  // Track orientation per image (wide vs tall)
  const [orientations, setOrientations] = useState({})
  const location = useLocation()

  useEffect(() => {
    if (location.hash === '#overview') {
      const el = document.getElementById('overview')
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' })
      }
    }
  }, [location])

  const handleImageLoad = (id) => (e) => {
    const { naturalWidth, naturalHeight } = e.target
    const orientation = naturalWidth / naturalHeight > 1.05 ? 'wide' : 'tall'
    setOrientations((prev) => ({ ...prev, [id]: orientation }))
  }

  return (
    <>
      <section className="hero-fullscreen" style={{ backgroundImage: `url(${heroImageUrl})` }}>
        <Navbar />
        <div className="hero-overlay"></div>
        <div className="hero-content">
          {/* <h1 className="hero-title">Benvenuti al Volée</h1>
          <p className="hero-subtitle">Dove la tradizione italiana incontra l'eccellenza culinaria</p>
          <Link to="/menu" className="cta-button">Scopri il Menu</Link> */}
        </div>
      </section>

      <section className="welcome-section" style={{ backgroundImage: `url(${welcomeImageUrl})` }}>
        <div className="welcome-overlay"></div>
        <div className="welcome-content">
          <h2>Benvenuti al Volèe</h2>
          <p>Volèe ristorante & cocktail bar, si trova all'interno del Nettuno Tennis club ed è la location ideale per pranzi, cene, aperitivi al tramonto ed eventi</p>
        </div>
      </section>

      <section id="overview" className="overview" style={{ backgroundImage: `url(${overviewImageUrl})` }}>
        <div className="overview-overlay"></div>
        <div className="overview-content">
          <h2>I nostri servizi</h2>
          <div className="features">
       
            <div className="feature">
              <h2>Ristorante</h2>
              <p>Una cucina che affonda le sue radici nella tradizione senza tralasciare la contaminazione con influenze moderne</p>
              <Link to="/menu" className="feature-button">Menu</Link>
            </div>
            <div className="feature">
              <h2>Bar</h2>
              <p>Dove ogni ospite è trattato come parte della famiglia</p>
            </div>
            <div className="feature">
              <h2>Eventi</h2>
              <p>Cucina italiana autentica con ingredienti selezionati</p>
              <Link to="/contatti" className="feature-button">Contattaci</Link>
            </div>
          </div>
        </div>
      </section>

      <section className="gallery-section">
        <div className="gallery-container">
          {galleryImages.map((image) => (
            <div key={image.id} className={`gallery-item ${orientations[image.id] || ''}`}>
              <img src={image.url} alt={`Galleria ${image.id}`} onLoad={handleImageLoad(image.id)} />
            </div>
          ))}
        </div>
      </section>

      
      <Footer />
    </>
  )
}

export default Home
