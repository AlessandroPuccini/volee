import Navbar from "../components/Navbar"
import Footer from "../components/Footer"


function Menu() {
    return (
        <>
            <Navbar />
            <div className="menu-page">
                <div className="menu-container">
                    <h1 className="menu-title">Il Nostro Menu</h1>
                    
                    <section className="menu-section">
                    <h2 className="menu-category">Antipasti</h2>
                    <div className="menu-items">
                        <div className="menu-item">
                            <div className="item-header">
                                <h3 className="item-name">Bruschetta</h3>
                                <span className="item-price">€8.00</span>
                            </div>
                            <p className="item-description">Pane tostato con pomodoro fresco, basilico e olio d'oliva</p>
                        </div>
                        {/* Aggiungi altri piatti qui */}
                    </div>
                </section>

                <section className="menu-section">
                    <h2 className="menu-category">Primi Piatti</h2>
                    <div className="menu-items">
                        <div className="menu-item">
                            <div className="item-header">
                                <h3 className="item-name">Pasta al Pomodoro</h3>
                                <span className="item-price">€12.00</span>
                            </div>
                            <p className="item-description">Pasta fresca con salsa di pomodoro e basilico</p>
                        </div>
                        {/* Aggiungi altri piatti qui */}
                    </div>
                </section>

                <section className="menu-section">
                    <h2 className="menu-category">Secondi Piatti</h2>
                    <div className="menu-items">
                        <div className="menu-item">
                            <div className="item-header">
                                <h3 className="item-name">Tagliata di Manzo</h3>
                                <span className="item-price">€18.00</span>
                            </div>
                            <p className="item-description">Carne di manzo con rucola e grana</p>
                        </div>
                        {/* Aggiungi altri piatti qui */}
                    </div>
                </section>

                <section className="menu-section">
                    <h2 className="menu-category">Dessert</h2>
                    <div className="menu-items">
                        <div className="menu-item">
                            <div className="item-header">
                                <h3 className="item-name">Tiramisù</h3>
                                <span className="item-price">€6.00</span>
                            </div>
                            <p className="item-description">Classico dolce italiano con caffè e mascarpone</p>
                        </div>
                        {/* Aggiungi altri piatti qui */}
                    </div>
                </section>
            </div>
        </div>
            <Footer />
        </>
    )
}

export default Menu
