import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Seo from "../components/Seo";

function Eventi() {
  return (
    <>
      <Seo
        title="Eventi"
        description="L'aperitivo che non ti aspetti. Eventi e format esclusivi da Volée Bologna. Cerchi un cocktail bar a Bologna lontano dal caos del centro? Volèe è il posto ideale per un drink post-allenamento o un evento aziendale esclusivo."
        path="/eventi"
      />
      <Navbar />
      <div className="eventi-page">
        <h1 className="invisible">L'aperitivo che non ti aspetti. Eventi e format esclusivi da Volée Bologna. Cerchi un cocktail bar a Bologna lontano dal caos del centro? Volèe è il posto ideale per un drink post-allenamento o un evento aziendale esclusivo.</h1>
        <div className="evento-sx">
          <section className="eventi-img">
            <img src="https://ik.imagekit.io/ae2125/SOFT%20CLUBBING.jpg" alt="Soft Clubbing" />
          </section>
          <section className="eventi-info">
            <p className="evento-date">DIMENTICA LA NOTTE</p>
            <p>
            Da domenica 29 Marzo, il format europeo del Soft Clubbing atterra da #VOLEEBOLOGNA <br></br> <br></br>
            5 Ore di pura connessione: <br></br> Colazione & Brunch<br></br> Aperitivo <br></br> Musica Giusta
            <br></br> <br></br>
            Ogni Domenica | 10:00 - 15:00 <br></br>
            Il tuo tavolo ti aspetta! <br></br>
            <a href="tel:+39389267656" className="btn-prenota">Prenota ora</a>
            
            </p>
          </section>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Eventi;