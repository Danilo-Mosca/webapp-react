// Hook usato per accedere a rotte dinamiche (consente di estrarre i parametri dalla URL, in questo caso mi serve il parametro dell'id):
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";

export default function MovieDetails({data}) {
    const { id } = useParams();     //Destrutturo useParames e ricavo l'id
    const movie = data.filter((movie) => movie.id == id.toString(), [0]);
    // Destrutturo data così da usare direttamente le variabili destrutturate. Es: title invece di data.title
    const { title, author, abstract } = movie[0];
    const imgPath = "http://localhost:3000/img/" + movie[0].image;

    return (
        <>
            <div className="card">
                <img className="card-img-top" src={imgPath} alt={title} />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <h5 className="card-title">{author}</h5>
                    <p className="card-text">{abstract}</p>
                    <Link to='/movies/' className="btn btn-primary">Torna alla lista dei film</Link>
                </div>
            </div>
        </>
    );
}


