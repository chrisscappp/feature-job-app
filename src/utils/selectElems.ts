import { SelectElemCategoryType, SelectElemSortType, SortKeyType, CategoryKeyType } from "../models"

export const elemsSort: SelectElemSortType[] = [
    {
        key: SortKeyType.RELEVANCE,
        id: "1",
    },
    {
        key: SortKeyType.NEWEST,
        id: "2",
    },
]

export const elemsCategory: SelectElemCategoryType[] = [
    {
        key: CategoryKeyType.ALL,
        id: "3",
    },
    {
        key: CategoryKeyType.ART,
        id: "4",
    },
    {
        key: CategoryKeyType.BIOGRAPHY,
        id: "5",
    },
    {
        key: CategoryKeyType.COMPUTERS,
        id: "6",
    },
    {
        key: CategoryKeyType.HISTORY,
        id: "7",
    },
    {
        key: CategoryKeyType.MEDICAL,
        id: "8",
    },
    {
        key: CategoryKeyType.POETRY,
        id: "9",
    },
]