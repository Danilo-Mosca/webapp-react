// Importo il GlobalContext per poter accedere alla variabile di stato movies contenente tutti i movies richiamati dalla API e porterli far consumare al componente Details
import { useGlobalContext } from "../contexts/GlobalContext.jsx";
import MovieDetails from "../components/MovieDetails.jsx";
// Hook usato per accedere a rotte dinamiche (consente di estrarre i parametri dalla URL, in questo caso mi serve il parametro dell'id):
import { useParams } from "react-router-dom"
import { useEffect } from "react";
import NotFoundPage from "./NotFoundPage.jsx";

export default function Details() {

    const { singleMovie, getSingleMovie } = useGlobalContext();
    const { id } = useParams();     //Destrutturo useParames e ricavo l'id
    console.log("id: ", id);

    useEffect(() => {
        getSingleMovie(id);
    }, [id]);




    return (
        <section className="container py-4">
            <div className="row g-3">
                {
                    singleMovie ? <MovieDetails dataMovies={singleMovie} /> : <NotFoundPage />
                }

            </div>
        </section>
    );
}