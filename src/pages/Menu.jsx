import Navbar from "../components/Navbar"
import Footer from "../components/Footer"
import { useState } from "react"


function Menu() {
    const [menuSrc] = useState('/Menu.png')
    return (
        <>
            <Navbar />
            <div className="menu-page">
                <div className="menu-container">
                    <img src={menuSrc} alt="Immagine del Menu" className="menu-image" />   
            </div>
        </div>
            <Footer />
        </>
    )
}

export default Menu
