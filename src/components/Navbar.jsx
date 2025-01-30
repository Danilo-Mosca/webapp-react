import { useState } from "react";
import { NavLink } from "react-router-dom";
export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false); // Stato per gestire il toggle del menu

    const handleToggle = () => {
        setIsOpen(!isOpen); // Cambia lo stato al clic sull'icona hamburger
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light h-100 p-0">
            <div className="container-fluid g-0">
                <NavLink to="/" className="navbar-brand ms-3">
                    <img style={{ width: "40px", height: "40px", borderRadius: "50px" }} src="/img/logo-film.png" alt="Logo film" className="logo" />
                </NavLink>
                <button
                    className="navbar-toggler me-3"
                    type="button"
                    aria-expanded={isOpen}
                    aria-label="Toggle navigation"
                    onClick={handleToggle}
                >
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div
                    className={`bg-secondary-subtle w-100 collapse navbar-collapse ${isOpen ? "show" : ""}`} // Aggiungi la classe "show" quando il menu è aperto
                    id="navbarSupportedContent"
                >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <NavLink
                                to="/movies"
                                className="nav-link"
                                style={({ isActive }) => (isActive ? { color: "#c6a664" } : {})}
                                end>
                                Lista dei film
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to="/about"
                                className="nav-link"
                                style={({ isActive }) => (isActive ? { color: "c6a664" } : {})}
                                end>
                                Chi siamo
                            </NavLink>
                        </li>

                        <li className="nav-item">
                            <NavLink
                                to="/contacts"
                                className="nav-link"
                                style={({ isActive }) => (isActive ? { color: "c6a664" } : {})}
                                end>
                                Contatti
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );

}