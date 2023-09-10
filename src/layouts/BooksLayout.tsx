import { memo } from "react"
import { IBook } from "../models";
import BooksList from "../components/BooksList/BookList"
import "./style.css"

interface BooksLayoutProps {
    books: IBook[];
    isLoading: boolean;
    totalItems: number;
    handleChangeQueryLimit: () => void;
}

const BooksLayout = ({ books, isLoading, totalItems, handleChangeQueryLimit }: BooksLayoutProps) => {

    return (
        <>
            <BooksList
                books = {books}
                isLoading = {isLoading}
                totalItems = {totalItems}
            />
            {
                books.length > 0 && !isLoading ?
                    <div className = "footer__pagination-wrapper">
                        <button 
                            onClick = {handleChangeQueryLimit}
                            className = "footer__pagination-wrapper__button"
                        >
                            load more
                        </button>
                    </div> : null
            }
            
        </>
    )
}
export default memo(BooksLayout)