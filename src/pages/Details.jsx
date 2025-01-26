// Importo il GlobalContext per poter accedere alla variabile di stato movies contenente tutti i movies richiamati dalla API e porterli far consumare al componente Details
import { useGlobalContext } from "../contexts/GlobalContext.jsx";
import MovieDetails from "../components/MovieDetails.jsx";
// Hook usato per accedere a rotte dinamiche (consente di estrarre i parametri dalla URL, in questo caso mi serve il parametro dell'id):
import { useParams } from "react-router-dom"

export default function Details() {
    const { movies } = useGlobalContext();
    const { reviews } = useGlobalContext();
    const { id } = useParams();     //Destrutturo useParames e ricavo l'id
    const filteredReviews = reviews.filter((review) => review.movie_id == id.toString());
    // console.log("Recensioni filtrate:", filteredReviews);
    
    return (
        <section className="container py-4">
            <div className="row g-3">
                    <MovieDetails dataMovies={movies.filter((movie) => movie.id == id.toString(), [0])} reviewsMovies={filteredReviews} />
            </div>
        </section>
    );
}