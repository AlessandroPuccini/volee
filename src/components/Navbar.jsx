import { Link } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [logoSrc, setLogoSrc] = useState('/logo.png')

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true)
            } else {
                setIsScrolled(false)
            }
        }

        const handleResize = () => {
            if (window.innerWidth > 1024) {
                setIsMenuOpen(false)
            }
        }

        window.addEventListener('scroll', handleScroll)
        window.addEventListener('resize', handleResize)
        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    const toggleMenu = () => setIsMenuOpen((prev) => !prev)
    const closeMenu = () => setIsMenuOpen(false)

    return (
        <>
            <nav className={`navbar ${isScrolled ? 'navbar-scrolled' : ''} ${isMenuOpen ? 'navbar-open' : ''}`}>
                <div className="navbar-brand">
                    <Link to="/" onClick={closeMenu}>
                        <img
                            src={logoSrc}
                            alt="Volèe"
                            className="navbar-logo"
                            onError={() => setLogoSrc('/vite.svg')}
                        />
                    </Link>
                </div>
                <div className="navbar-actions">
                    <a href="tel:+39XXXXXXXXXX" className="call-us-btn">CHIAMACI +39 333 66667788</a>
                    <button
                        className={`hamburger ${isMenuOpen ? 'is-active' : ''}`}
                        type="button"
                        aria-label="Toggle navigation menu"
                        aria-expanded={isMenuOpen}
                        onClick={toggleMenu}
                    >
                        <span />
                        <span />
                        <span />
                    </button>
                </div>
            </nav>
            <div className={`menu-overlay ${isMenuOpen ? 'open' : ''}`}>
                <button
                    className="menu-overlay__close"
                    type="button"
                    aria-label="Chiudi menu"
                    onClick={closeMenu}
                >
                    <span />
                    <span />
                </button>
                <div className="menu-overlay__content">
                    <ul className="menu-overlay__links">
                        <li><Link to="/" onClick={closeMenu}>Home</Link></li>
                        <li><Link to="/menu" onClick={closeMenu}>Menu</Link></li>
                        <li><Link to="/#overview" onClick={closeMenu}>Il Locale</Link></li>
                        <li><Link to="/eventi" onClick={closeMenu}>Eventi</Link></li>
                        <li><Link to="/contatti" onClick={closeMenu}>Contatti</Link></li>
                    </ul>
                </div>
            </div>
        </>
    )

}
export default Navbar