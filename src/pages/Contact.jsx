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
            <h3>📞 Telefono</h3>
            <p>+39 06 1234567</p>
          </div>

          <div className="contact-item">
            <h3>📧 Email</h3>
            <p>info@ristorantevolee.it</p>
          </div>

          <div className="contact-item">
            <h3>🕐 Orari di Apertura</h3>
            <p>Lunedì - Venerdì: 12:00 - 15:00, 19:00 - 23:00</p>
            <p>Sabato - Domenica: 12:00 - 23:00</p>
          </div>
        </section>

        <section className="reservation-form">
          <h2>Prenota un Tavolo</h2>
          <form>
            <div className="form-group">
              <label htmlFor="name">Nome:</label>
              <input type="text" id="name" name="name" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input type="email" id="email" name="email" required />
            </div>

            <div className="form-group">
              <label htmlFor="phone">Telefono:</label>
              <input type="tel" id="phone" name="phone" required />
            </div>

            <div className="form-group">
              <label htmlFor="date">Data:</label>
              <input type="date" id="date" name="date" required />
            </div>

            <div className="form-group">
              <label htmlFor="time">Ora:</label>
              <input type="time" id="time" name="time" required />
            </div>

            <div className="form-group">
              <label htmlFor="guests">Numero di Persone:</label>
              <input type="number" id="guests" name="guests" min="1" max="20" required />
            </div>

            <div className="form-group">
              <label htmlFor="message">Note Speciali:</label>
              <textarea id="message" name="message" rows="4"></textarea>
            </div>

            <button type="submit" className="submit-btn">Prenota Ora</button>
          </form>
        </section>
      </div>
      <Footer />
    </>
  )
}

export default Contact
