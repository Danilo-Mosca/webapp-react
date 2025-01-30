import { useGlobalContext } from "../contexts/GlobalContext"
import style from "../style/Pagination.module.css"
export default function Pagination() {
    const { handlePageChange, page, numPages } = useGlobalContext();

    return (
        <nav className="col-12 d-flex justify-content-center">
            <ul className="pagination">
                <li className={`page-item ${page <= 1 ? "disabled" : ""} px-5 `}>
                    <button
                        className={`page-link ${style.pageBtn}`}
                        onClick={() => handlePageChange(page - 1)}
                    >
                        Previous
                    </button>
                </li>
                {new Array(numPages).fill("").map((num, index) => (
                    <li
                        className={`page-item  ${page === index + 1 ? "" : `${style.dark}`} mx-2 `}
                        aria-current="page"
                        key={index + 1}
                    >
                        <button
                            className={`page-link ${page === index + 1 ? `${style.active}` : `${style.dark}`} ${style.pageBtn}`}
                            onClick={() => handlePageChange(index + 1)}
                        >
                            {index + 1}
                        </button>
                    </li>
                ))}
                <li className={`page-item ${page >= numPages ? "disabled" : ""} px-5`}>
                    <button
                        className={`page-link ${style.pageBtn}`}
                        onClick={() => handlePageChange(page + 1)}
                    >
                        Next
                    </button>
                </li>
            </ul>
        </nav >
    )
}