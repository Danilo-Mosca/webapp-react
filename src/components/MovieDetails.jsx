// Hook usato per accedere a rotte dinamiche (consente di estrarre i parametri dalla URL, in questo caso mi serve il parametro dell'id):
import { useParams } from "react-router-dom"
import { Link } from "react-router-dom";
import Star from "./Star";
// Importo il GlobalContext per poter accedere alla variabile di stato  isLoading
import { useGlobalContext } from "../contexts/GlobalContext.jsx";
// Importo il componente Loader:
import Loader from "./Loader";
import style from "../style/MovieDetails.module.css"   // Importo il CSS Modules di MovieDetails
import ReviewForm from "./ReviewForm";  // Importo il componente ReviewForm per il form recensioni

export default function MovieDetails({ dataMovies }) {
    const { id } = useParams();     //Destrutturo useParames e ricavo l'id
    const { isLoading } = useGlobalContext();   // Destrutturo per ricavarmi la variabile di stato isLoading
    // console.log("dataMovies: ", dataMovies);
    const imgPath = "http://localhost:3000/img/";

    return (
        <>
            {dataMovies ?
                <>
                    <div className="bg-book-detail">
                        <div id="book-detail" className="" key={id}>
                            <div className="mb-5 d-flex flex-column flex-md-row gap-3 gap-lg-5">
                                <img className="card-img-top card-img-details mb-3 align-self-center" src={imgPath + dataMovies.image} alt={dataMovies.title} />

                                <div className="d-flex flex-column text-center text-md-start">
                                    <h5 className="fs-1 fw-bold">{dataMovies.title}</h5>
                                    <h5 className="text-secondary">By &nbsp;<span className="text-black fw-bold text-decoration-underline">{dataMovies.director}</span></h5>
                                    <p className="text-secondary fw-bold">{dataMovies.abstract}</p>
                                </div>
                                {/* <Link to='/movies/' className="btn btn-primary">Torna alla lista dei film</Link> */}
                            </div>

                        </div>
                        <section>
                            <div className="d-flex justify-content-between">
                                {/* {console.log("dataBooks: " + dataBooks)} */}
                                {dataMovies?.reviews.length > 0 ? <h3 className="d-none d-md-block">Recensioni:</h3> : ""}
                                <h3 className="w-100 text-center text-md-end">
                                    Media voto: <Star num={dataMovies.vote_average} />
                                </h3>
                            </div>

                            {dataMovies?.reviews.length > 0 ? dataMovies.reviews.map((review, index) => (
                                <div key={review.id}>
                                    <div className={`card d-flex flex-column mb-3 ${index % 2 === 0 && "bg-secondary-subtle"}`}>
                                        <div className="card-body">
                                            <p className="card-text">{review.text}</p>
                                            <h5 className="card-title">
                                                Vote: <Star num={review.vote} />
                                            </h5>
                                            <p className={`card-text ${style["text-name"]}`}>By {review.name}</p>
                                        </div>
                                    </div>
                                </div>

                            )) : <h4 className="py-5 text-center fw-bold">Non ci sono recensioni per questo libro: aggiungi la tua!</h4>}
                        </section>
                        <section>
                            <ReviewForm movie_id={id} />
                        </section>
                    </div>
                </>
                : isLoading && <Loader />
            }
        </>
    );
}