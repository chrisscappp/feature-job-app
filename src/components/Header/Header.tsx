import { KeyboardEvent, Dispatch, SetStateAction, memo } from "react"
import { SortKeyType, CategoryKeyType } from "../../models"
import { elemsSort, elemsCategory } from "../../utils/selectElems"
import SelectComponent from "../SelectComponent/SelectComponent"
import "./style.css"

interface HeaderProps {
    handleChangeSearch: (e: any) => void;
    searchBooksByEnter: (e: KeyboardEvent) => void;
    searchBooksByButton: () => void;
    sortKey: SortKeyType;
    setSortKey: Dispatch<SetStateAction<SortKeyType>>;
    categoryKey: CategoryKeyType;
    setCategoryKey: Dispatch<SetStateAction<CategoryKeyType>>;
    handleFilterBooks: (key: CategoryKeyType) => void;
}

const Header = (
    { handleChangeSearch, searchBooksByButton, searchBooksByEnter, sortKey, categoryKey, setSortKey, handleFilterBooks }: HeaderProps) => {
    
    const handleSetSortKey = (key: SortKeyType) => {
        setSortKey(key)
    }

    return (
        <>
            <div className = "header__wrapper">
                <div className = "header__wrapper-container">
                    <div className = "header__wrapper-container-title">
                        <p className = "header__wrapper-container-title__text">
                            Найди свою книгу
                        </p>
                    </div>
                </div>
                <div className = "header__wrapper-container-searchBar">
                    <input type="text" 
                        onChange = {(e) => handleChangeSearch(e)}
                        onKeyUp={searchBooksByEnter}
                        className = "header__wrapper-container-searchBar__input"
                    />
                    <button 
                        onClick = {searchBooksByButton}
                        className = "header__wrapper-container-searchBar__button"
                    >
                        найти
                    </button>
                </div>
                <div className = "header__wrapper-container-tools">
                    <div className = "header__wrapper-container-tools__category">
                        <SelectComponent
                            selectTitle = {"сортировка"}
                            elements = {elemsSort}
                            viewKey = {sortKey}
                            setKey = {handleSetSortKey}
                        />
                    </div>
                    <div className = "header__wrapper-container-tools__sorting">
                        <SelectComponent
                            selectTitle = {"категории"}
                            elements = {elemsCategory}
                            viewKey = {categoryKey}
                            setKey = {handleFilterBooks}
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default memo(Header)