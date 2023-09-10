import { useNavigate } from 'react-router-dom'
import "./style.css"

interface BooksItemProps {
    cardId: string;
    card: any;
}

const BooksItem = ({ cardId, card }: BooksItemProps) => {

    const navigate = useNavigate()

    let imgLink = card.imageLinks && card.imageLinks.smallThumbnail

    return (
        <>
            <div className = "booksItem__wrapper" onClick = {() => navigate(`/${cardId}`)}>
                <div className = "booksItem__wrapper-container">
                    <img src = {imgLink} alt="" />
                    <div className = "booksItem__wrapper-container-info">
                        <p className = "info-category">{card.categories}</p>
                        <h3 className = "info-title">{card.title}</h3>
                        <p className = "info-author">{card?.authors?.join(", ")}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BooksItem