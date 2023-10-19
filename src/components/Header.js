import { NavLink } from "react-router-dom";
import Logo from '../assets/logo.png';

function Header() {
    return (
        <header>
            <NavLink to="/"><img src={ Logo } alt='Logo Kasa' className="header-logo"/></NavLink>
            
            <nav>
                <ul>
                    <li><NavLink to="/" style={({ isActive }) => ({textDecoration: isActive ? 'underline' : 'none'})}>Accueil</NavLink></li>
                    <li><NavLink to="/about" style={({ isActive }) => ({textDecoration: isActive ? 'underline' : 'none'})}>About</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header