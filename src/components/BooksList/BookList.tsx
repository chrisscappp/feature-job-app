import BooksItem from "../BooksItem/BooksItem"
import { IBook } from "../../models"
import "./style.css"

interface BooksListProps {
    books: IBook[];
    isLoading: boolean;
    totalItems: number;
}

const BooksList = ({ books, isLoading, totalItems }: BooksListProps) => {

    if (isLoading) return <h3>Loading...</h3>

    return (
        <>
            {
                books.length === 0 && !isLoading ?
                    <h3>По вашему запросу ничего не найдено :(</h3>
                    :
                    <>
                        <div className = "total__wrapper">
                            <h3 className = "total__wrapper-text">Найдено книг: {totalItems}</h3>
                        </div>
                        <div className = "books__wrapper">
                            <div className = "books__wrapper-container">
                                {
                                    books?.map((item: any) => {
                                        return (
                                            <BooksItem
                                                key = {item.id}
                                                cardId = {item.id}
                                                card = {item.volumeInfo}
                                            />
                                        )
                                    })
                                }
                            </div>
                        </div>
                    </>
            }
        </>
    )
}

export default BooksList