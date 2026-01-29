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
            <p>Via Petronio Fancelli, 5 Bologna</p>
          </div>
          
          <div className="contact-item">
            <h3>TELEFONO</h3>
            <p>+39 389 2676565</p>
          </div>

          

          <div className="contact-item">
            <h3>ORARI BAR E CLUB</h3>
            <p>Dal Martedì alla Sabato <br></br>09:00 - 14:00 / 17:00 - 23:00</p>
            <p>Domenica  09:00 - 15:00</p>
            <p>Lunedì chiuso</p>
          </div>

          <div className="contact-item">
            <h3>ORARI RISTORANTE</h3>
             <p>Dal Martedì al Sabato <br></br>12:00 - 14:00 / 19:00 - 23:00</p>
             <p>Domenica  12:00 - 14:00</p>
            <p>Lunedì chiuso</p>
          </div>
        </section>

        

      </div>
      <Footer />
    </>
  )
}

export default Contact
