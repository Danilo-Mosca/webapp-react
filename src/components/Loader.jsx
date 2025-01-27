import { FiCommand } from "react-icons/fi";     // Importo l'icona di caricamento
function Loader() {

    return (
        <div id="loader">
            <FiCommand className="loading-icon" />
        </div>
    );
}

export default Loader;