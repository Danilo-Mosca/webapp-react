import { Link } from "react-router-dom";

export default function Homepage() {
    return (
        <div className=" d-flex justify-content-center align-items-center flex-column text-position-h1-p">
            <h1 id="homepage-text">Film Production</h1>
            <p className="pt-sm-5" id="homepage-p"><i><Link to="/movies">Consulta i nostri film!</Link></i></p>
        </div>
    )
}