import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function Contact() {
  return (
    <>
      <Navbar />
      <div className="contact-page">
        <h1>Contattaci</h1>
        <section className="contact-info">
          <h2>Informazioni di Contatto</h2>
          <div className="contact-item">
            <h3>📍 Indirizzo</h3>
            <p>Via Roma 123, 00100 Roma, Italia</p>
          </div>
          
          <div className="contact-item">
            <h3>Telefono</h3>
            <p>+39 06 1234567</p>
          </div>

          <div className="contact-item">
            <h3>Email</h3>
            <p>info@ristorantevolee.it</p>
          </div>

          <div className="contact-item">
            <h3>Orari di Apertura</h3>
            <p>Lunedì - Venerdì: 12:00 - 15:00, 19:00 - 23:00</p>
            <p>Sabato - Domenica: 12:00 - 23:00</p>
          </div>
        </section>

      </div>
      <Footer />
    </>
  )
}

export default Contact
