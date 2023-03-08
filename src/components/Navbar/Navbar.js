import CarWidget from "../Navbar/CarWidget"

function NavBar() {
    return (
        <nav className="col  navegador d-flex justify-content-between">
            <ul className="menu">
                <li>
                    <a href="#">Inicio</a>
                    <a href="#">Estrenos</a>
                    <a href="#">Contacto</a>
                    <a href="#">Sobre Nosotros</a>
                </li>
            </ul>
            <div>
                <CarWidget />
            </div>
        </nav>
    )
}
export default NavBar