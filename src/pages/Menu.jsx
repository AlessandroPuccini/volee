import { useEffect } from "react"
import Navbar from "../components/Navbar"
import Footer from "../components/Footer"

function Menu() {
    useEffect(() => {
        document.body.classList.add("menu-dark-bg")
        return () => document.body.classList.remove("menu-dark-bg")
    }, [])

    return (
        <>
            <Navbar />
            <div className="menu-page">
                <div className="menu-container">
                    <div className="menu-visual">
                        <div className="menu-desktop">
                            <img src="/Menu.png" alt="Immagine del Menu" className="menu-image" />
                        </div>
                        <div className="menu-mobile">
                            <img src="/Menu-mobile-1.png" alt="Immagine del Menu (parte 1)" className="menu-image" />
                            <img src="/Menu-mobile-2.png" alt="Immagine del Menu (parte 2)" className="menu-image" />
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default Menu
