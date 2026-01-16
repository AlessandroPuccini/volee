import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function Contact() {
  return (
    <>
      <Navbar />
      <div className="contact-page">
        <h1>PUOI TROVARCI QUI</h1>
        <section className="contact-info">
          <div className="contact-item">
            <h3>INDIRIZZO</h3>
            <p>Via Roma 123, 00100 Roma, Italia</p>
          </div>
          
          <div className="contact-item">
            <h3>TELEFONO</h3>
            <p>+39 06 1234567</p>
          </div>

          <div className="contact-item">
            <h3>EMAIL</h3>
            <p>info@ristorantevolee.it</p>
          </div>

          <div className="contact-item">
            <h3>ORARI DI APERTURA</h3>
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
