import { CategoryKeyType, SortKeyType, SelectElemCategoryType, SelectElemSortType } from "../../models";
import "./style.css"

interface SelectComponentProps {
    selectTitle: string;
    elements: SelectElemCategoryType[] | SelectElemSortType[];
    setKey: ((key: SortKeyType) => void) | ((key: CategoryKeyType) => void);
    viewKey: string;
}

const SelectComponent = ({ selectTitle, elements, setKey, viewKey }: SelectComponentProps) => {
    return (
        <>  
            <div className = "category-dropdown">
                <span className = "category-dropdown__title">{selectTitle}: {viewKey}</span>
                <div className = "category__dropdown-content">
                    {
                        elements.map((item) => {
                            return (
                                <p key = {item.id} onClick = {() => setKey(item.key as never)} className="dropdown-content__text">
                                    {item.key}
                                </p>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}

export default SelectComponent