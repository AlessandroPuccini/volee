import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''}`}>
            <div className="navbar-brand">
                <Link to="/">Volée</Link>
            </div>
            <ul className="navbar-menu">
                {/* <li><Link to="/">Home</Link></li> */}
                {/* <li><Link to="/il-locale">Il Locale</Link></li> */}
                {/* <li><Link to="/eventi">Eventi</Link></li> */}
                {/* <li><Link to="/chi-siamo">Chi Siamo</Link></li> */}
                {/* <li><Link to="/contatti">Contatti</Link></li> */}
                
                {/* Menu voce - collegamento alla pagina del menu del locale */}
                <li><Link to="/menu">Menu</Link></li>
                
                {/* Call Us button - collegamento a numero di telefono */}
                <li><a href="tel:+39XXXXXXXXXX" className="call-us-btn">Chiamaci</a></li>
            </ul>
        </nav>
    )

}
export default Navbar