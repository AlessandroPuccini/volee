import { Link } from 'react-router-dom'

function Navbar() {

    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link to="/">Volée</Link>
            </div>
            <ul className="navbar-menu">
                <li><Link to="/">Home</Link></li>
                <li><Link to="/il-locale">Il Locale</Link></li>
                <li><Link to="/eventi">Eventi</Link></li>
                <li><Link to="/chi-siamo">Chi Siamo</Link></li>
                <li><Link to="/contatti">Contatti</Link></li>
            </ul>
        </nav>
    )

}
export default Navbar