import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Home() {
  
  // URL Cloudinary - sostituisci con la tua immagine
  const heroImageUrl = "https://res.cloudinary.com/dmxjn7rsc/image/upload/v1768560546/Volee/home.png"
  // const overviewImageUrl = "https://res.cloudinary.com/dmxjn7rsc/image/upload/v1759759671/movies/donnasola.png"
  // const welcomeImageUrl = "https://res.cloudinary.com/dmxjn7rsc/image/upload/v1750754435/samples/food/fish-vegetables.jpg"

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

{/* style={{ backgroundImage: `url(${welcomeImageUrl})` }} */}

      <section className="welcome-section" >
        <div className="welcome-content">
          <h2>BENVENUTI AL VOLÈE</h2>
          <p>DOVE OGNI MOMENTO TROVA IL SUO SPAZIO</p>
          <p>DALLA PAUSA PRANZO AL COCKTAIL E CENA SERALE, DALLA COLAZIONE AL PARTY.
             VOLÈE RISTORANTE & COCKTAIL BAR SI TROVA PRESSO IL NETTUNO TENNIS CLUB.</p>
        </div>
      </section>

{/* style={{ backgroundImage: `url(${overviewImageUrl})` }} */}

      <section id="overview" className="overview" >
        <div className="overview-content">
          <div className="overview-header">
            <div className="overview-title">
              <h2>RIS<br></br>TOR<br></br>ANTE</h2>
            </div>
            <div className="overview-subtitle">
              <p>UN PERCORSO GASTRONOMICO CHE UNISCE MEMORIA E SPERIMENTAZIONE.</p>
            </div>
          </div>
          <div className="overview-text">
            <p>
              La proposta culinaria si basa su una cucina italiana contemporanea che rielabora la 
              tradizione regionale, con un forte legame all'Emilia-Romagna e al Sud Italia. I piatti 
              classici bolognesi convivono con influenze calabresi, valorizzando ingredienti iconici 
              attraverso tecniche moderne, stagionalità e un equilibrio tra comfort food e creatività. 
              Il venerdì sera l'atmosfera si accende con musica dal vivo e per chi lo desidera è 
              possibile gustare un menù di pesce, disponibile su prenotazione. Il ristorante è aperto 
              tutti i giorni a pranzo, dalle 12:00 alle 14:00, e a cena a partire dalle 19:30.
            </p>
            <Link to="/menu" className="overview-button">Menu</Link>
          </div>
        </div>
      </section>

      <section id="bar" className="bar" >
        <div className="bar-content">
          <div className="bar-header">
            <div className="bar-title">
              <h2>BAR</h2>
            </div>
            <div className="bar-subtitle">
              <p>UN RITUALE ITALIANO <br></br>DAL MATTINO ALL'APERITIVO</p>
            </div>
          </div>
          <div className="bar-text">
            <p>
              Il bar del Volee accompagna ogni momento della giornata con una proposta curata e accogliente. 
              Dalle colazioni, pensate per iniziare la giornata con semplicità e qualità, agli aperitivi, 
              interpretati anche nella loro versione più autenticamente italiana, con una selezione di stuzzichini 
              che valorizzano sapori tradizionali. Uno spazio dedicato alla convivialità, dove gusto e relax si 
              incontrano in un’atmosfera informale ma ricercata.
            </p>
          </div>
        </div>
      </section>

      <section id="eventi" className="eventi" >
        <div className="eventi-content">
          <div className="eventi-header">
            <div className="eventi-title">
              <h2>EVE<br></br>NTI</h2>
            </div>
            <div className="eventi-subtitle">
              <p>EVENTI E MOMENTI DA VIVERE <br></br>IN UN SOLO LUOGO</p>
            </div>
          </div>
          <div className="eventi-text">
            <p>
              Volee è un’esclusiva location alle porte del centro di Bologna. Grazie agli spazi interni 
              e all’ampia area esterna con parcheggio annesso, si presta a ospitare qualsiasi tipo di evento: 
              dai business event alle lauree, dai compleanni a tutte le altre occasioni private.

            </p>
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





// <div className="feature">
//               <h2>Ristorante</h2>
//               <p>La proposta nasce da una cucina italiana contemporanea che affonda le radici.</p>
//               <Link to="/menu" className="feature-button">Menu</Link>
//             </div>
//             <div className="feature">
//               <h2>Bar</h2>
//               <p>Dove ogni ospite è trattato come parte della famiglia</p>
//             </div>
//             <div className="feature">
//               <h2>Eventi</h2>
//               <p>Cucina italiana autentica con ingredienti selezionati</p>
//               <Link to="/contatti" className="feature-button">Contattaci</Link>
//             </div>