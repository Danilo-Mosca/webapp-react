// Hook usato per accedere a rotte dinamiche (consente di estrarre i parametri dalla URL, in questo caso mi serve il parametro dell'id):
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
// Importo il CSS Modules di MovieDetails
import style from "./MovieDetails.module.css"

export default function MovieDetails({ dataMovies, reviewsMovies }) {
    const { id } = useParams();     //Destrutturo useParames e ricavo l'id
    const movie = dataMovies.filter((movie) => movie.id == id.toString(), [0]);
    // console.log("Recensioni:", reviewsMovies);

    // Destrutturo data così da usare direttamente le variabili destrutturate. Es: title invece di data.title
    const { title, author, abstract, vote_average } = movie[0];
    const imgPath = "http://localhost:3000/img/" + movie[0].image;

    return (
        <>
            <div className="col-12 col-md-6 col-lg-4" key={id}>
                <div className="card" id={style.idcards}>
                    <img className="card-img-top" src={imgPath} alt={title} />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <h5 className="card-title">{author}</h5>
                        <p className="card-text">{abstract}</p>
                        <Link to='/movies/' className="btn btn-primary">Torna alla lista dei film</Link>
                    </div>
                </div>
            </div>

            <section className="py-4">
                <div className="py-4 d-flex justify-content-between "><h3 >Recensioni:</h3><h3 >Media voto: {vote_average}</h3></div>


                {reviewsMovies.map((review) => (
                    <div key={review.id}>
                        <div className={"card d-flex flex-column mb-3"}>
                            <div className="card-body">
                                <p className="card-text">{review.text}</p>
                                <h5 className="card-title">Vote: {review.vote}</h5>
                                <p className={`card-text ${style["text-name"]}`}>By {review.name}</p>
                            </div>
                        </div>
                    </div>
                ))}

            </section>


        </>
    );
}


