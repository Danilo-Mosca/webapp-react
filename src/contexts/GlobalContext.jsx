// Creazione della GlobalContext che conterrà tutte le chiamate API al server
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";     // Importo il componente useNavigate per gestire il not found 404 per gli id dei film non esistenti
import NotFoundPage from "../pages/NotFoundPage";
//Api url e endpoint per axios
const apiUrl = import.meta.env.VITE_APIURL;
const endPoint = "/movies/"      // EndPoint per le chiamate API
const GlobalContext = createContext();  //crea il Context e gli do il nome GlobalContext

// Creo il provider customizzato:
const GlobalProvider = ({ children }) => {
    // useState dei movies:
    const [movies, setMovies] = useState([]);
    // useState del singolo movie:
    const [singleMovie, setSingleMovie] = useState();
    // useState del Loader:
    const [isLoading, setIsLoading] = useState(false);
    const [numPages, setNumPages] = useState(0);
    // useState settagio pagina:
    const [page, setPage] = useState(1);


    /* Configuro lo useEffect per chiamare l'API per i film popolari solo al caricamento della pagina: */
    useEffect(() => {
        getmovies();
    }, [page]);        // Ogni volta che la variabile di stato page cambia, viene richiamato lo useEffect che a sua volta richiama la funzione getmovies. Questo per far comparire i film in base alla pagina.

    // Fuzione richiamata in Pagination.jsx
    function handlePageChange(page) {
        // console.log(page);
        setPage(page);
    }

    function getmovies() {
        setIsLoading(true);     // Attivo il Loader fino all'arrivo dei dati tramite chiamata axios
        axios.get(apiUrl + "/movies", { params: { page } })
            .then((res) => {
                // console.log("Films: ", res.data.items[0].vote_average);
                // setmovies(res.data.items);
                console.log("LIMIT: ", res.data.limit)
                setNumPages(Math.ceil(res.data.count / res.data.limit));
                setMovies(res.data.items);
            })
            .catch((err) => {
                console.log(err);
            })
            .finally(() => {
                console.log("Finito movies: ", movies);
                setIsLoading(false);    // Disattivo il Loader dopo l'arrivo dei dati (sia che siano arrivati, sia in caso di errore)
            });
    }

    function getSingleMovie(id) {
        setIsLoading(true);     // Attivo il Loader fino all'arrivo dei dati tramite chiamata axios
        axios.get(apiUrl + "/movies/" + id)
            .then((res) => {
                console.log("Scheda film intero: ", res.data);
                setSingleMovie(res.data);
            })
            .catch((err) => {
                const navigate = useNavigate();     // Creo la costante navigate per gestire il not found 404 per gli id dei film non esistenti
                console.log(err);
                // Se lo status dell'errore è 404 allora reindirizza alla NotFoundPage ( si poteva inserire anche: navigate("/url-inesistente"); )
                if (err.status === 404){
                    console.log("Id del movie Not found");
                    navigate(NotFoundPage);
                    
                }
            })
            .finally(() => {
                console.log("Finito movies");
                console.log("singleMovie: ", singleMovie);
                setIsLoading(false);    // Disattivo il Loader dopo l'arrivo dei dati (sia che siano arrivati, sia in caso di errore)
            });
    }

    /* Chiamata post di axios che crea una recensione per quel film con quello specifico id */
    function postReview(formData, movie_id) {
        setIsLoading(true);     // Attivo il Loader fino all'arrivo dei dati tramite chiamata axios
        axios.post(`${apiUrl}${endPoint}${movie_id}/reviews`, formData)
            .then((res) => {
                console.log("Chiamata axios per postReview: ", res);
                getSingleMovie(movie_id);
            }).catch((error) => {
                console.log(error);

            }).finally(() => {
                console.log("Fatto");
                setIsLoading(false);    // Disattivo il Loader dopo l'arrivo dei dati (sia che siano arrivati, sia in caso di errore)
            })
    }

    // Oggetto contenente i dati da passare al value per offrirli ai Consumer (i componenti racchiusi nel Provider di GLobalContext):
    const collectionData = {
        movies,
        setMovies,
        singleMovie,
        getSingleMovie,
        postReview,
        isLoading,
        setIsLoading,
        page,
        numPages,
        handlePageChange
    }

    return (
        <GlobalContext.Provider value={collectionData}>
            {children}
        </GlobalContext.Provider>
    );
}
// Creo una hook personalizzata per accedere al Context:
function useGlobalContext() {
    const context = useContext(GlobalContext);

    // Se per sbaglio non dovessi inserire correttamente il Provider nel file App.jsx, allora genero un errore per facilitare il debug:
    if (!context) {
        throw new Error("useGlobalContext is not inside the context provider GlobalProvider");
    }
    return context;
}

export { GlobalProvider, useGlobalContext };