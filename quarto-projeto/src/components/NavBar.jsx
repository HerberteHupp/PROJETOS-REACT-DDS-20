import {NavLink, Link} from "react-router-dom"

const NavBar = () => {
  return (
    <nav>
        {/* LINKS DE MENU = NAVLINK */}
        <NavLink to="/home">Home</NavLink>
        <NavLink to="/cadastro">Cadastro</NavLink>
        <NavLink to="/sobre">Sobre</NavLink>
        
        {/* LINKS NORMAIS = LINK */}
        <Link to="/login">Login</Link>
    </nav>
  )
}

export default NavBar