// Importo il GlobalContext per poter accedere alla variabile di stato movies contenente tutti i movies richiamati dalla API e porterli far consumare al componente Movies
import { useGlobalContext } from "../contexts/GlobalContext.jsx";
import Card from "../components/Card.jsx";
import Loader from "../components/Loader.jsx";
import Pagination from "../components/Pagination.jsx";

export default function Movies() {
    const { movies } = useGlobalContext();
    return (
        <>
            <section className="container py-4">
                <div className="row g-3">
                    {movies.map((movie) => (
                        <div className="col-12 col-md-6 col-lg-4" key={movie.id}>
                            <Card data={movie} />
                        </div>
                    ))}
                </div>
            </section>
            <Pagination />
        </>
    );
}