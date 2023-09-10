import { useParams, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { observer } from "mobx-react-lite"
import { useStores } from "../../hooks/rootStoreContext"
import { IBook } from "../../models"
import "./style.css"

const BookItemFull = () => {

    const { id } = useParams()
    const navigate = useNavigate()

    const [card, setCard] = useState<IBook | undefined>()
    const { booksStore: {
        books,
    } } = useStores()

    useEffect(() => {
        setCard(books.find(item => item.id === id))
    }, [books])

    if (!card) navigate("/")


    let imgLink = card?.volumeInfo?.imageLinks && card?.volumeInfo?.imageLinks?.smallThumbnail

    return (
        <>
            <div className = "bookFullInfo__wrapper">
                <div className = "bookFullInfo__wrapper-container"> 
                    <div className = "bookFullInfo__wrapper-container-picture__wrapper">
                        <img 
                            src = {imgLink} 
                            alt="" 
                            className = "bookFullInfo__wrapper-container-picture__wrapper-item"
                        />
                    </div>
                    <div className = "bookFullInfo__wrapper-container-info__wrapper">
                        <div className = "bookFullInfo__wrapper-container-info__wrapper__container">
                            <div className = "bookFullInfo__wrapper-container-info__wrapper__categories">
                                <p className = "bookFullInfo__wrapper-container-info__wrapper__categories-text">
                                    {
                                        card?.volumeInfo?.categories ?
                                            card.volumeInfo.categories.join("/") : "Без категории"
                                    }
                                </p>
                            </div>
                            <div className = "bookFullInfo__wrapper-container-info__wrapper__title">
                                <h3 className = "bookFullInfo__wrapper-container-info__wrapper__title-text">
                                    {card?.volumeInfo?.title}
                                </h3>
                            </div>
                            <div className = "bookFullInfo__wrapper-container-info__wrapper__authors">
                                <p className = "bookFullInfo__wrapper-container-info__wrapper__authors-text">
                                    {
                                        card?.volumeInfo?.authors ?
                                            card.volumeInfo.authors.join("/") : "Без автора"
                                    }
                                </p>
                            </div>
                            <div className = "bookFullInfo__wrapper-container-info__wrapper__description">
                                <p className = "bookFullInfo__wrapper-container-info__wrapper__description-text">
                                    {card?.volumeInfo?.description}
                                </p>
                            </div>
                            <button 
                                className = "back__button"
                                onClick = {() => navigate("/")}
                            >
                                назад
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default observer(BookItemFull) 