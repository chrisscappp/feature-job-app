import { Route, Routes } from "react-router-dom"
import { useEffect, useState, useRef, KeyboardEvent, lazy, useCallback } from "react"
import { useStores } from "../hooks/rootStoreContext"
import { observer } from "mobx-react-lite"
import { QueryParamsType, SortKeyType, CategoryKeyType } from "../models"
import { INITIAL_QUERY_LIMIT, PAGINATION_STEP } from "../utils/constants"
import CommonLayout from "./CommonLayout"
import Header from "../components/Header/Header"

const BooksPage = lazy(() => {return import("./BooksLayout")})
const ErrorPage = lazy(() => {return import("./ErrorLayout")})
const BookFullInfo = lazy(() => {return import("../components/BookItemFull/BookItemFull")})

const AppLayout = () => {

    /*
        Согласен, что выносить логику в AppLayout, по сути, некрасиво и неэлегантно,
        но не придумал другого решения как переиспользовать <Header/>,
        т.к. он зависит от большого количества пропсов
    */

    const [queryLimit, setQueryLimit] = useState<number>(INITIAL_QUERY_LIMIT)
    const [sortKey, setSortKey] = useState<SortKeyType>(SortKeyType.RELEVANCE)
    const [categoryKey, setCategoryKey] = useState<CategoryKeyType>(CategoryKeyType.ALL)
    const ref = useRef<string>("all")

    const { 
        booksStore: {
            getBooksAction, getFilteredBooks, books, totalItems, isLoading, error,
        },
    } = useStores()

    useEffect(() => {
        const queryParams: QueryParamsType = {
            queryLimit: queryLimit,
            search: ref.current,
            orderBy: sortKey,
            categoryBy: categoryKey,
        }
        if (queryLimit <= 40) {
            getBooksAction(queryParams)
        } else {
            alert("Гугл АПИ ограничивает запрос до 40")
        }
        
    }, [queryLimit, sortKey])

    const handleChangeSearch = (e: any) => ref.current = e.target.value

    const searchBooksByEnter = useCallback((e: KeyboardEvent) => {
        if (ref.current && e.key === "Enter") {
            setQueryLimit(INITIAL_QUERY_LIMIT)
            const queryParams: QueryParamsType = {
                queryLimit: queryLimit,
                search: ref.current.toLowerCase(),
                orderBy: sortKey,
                categoryBy: categoryKey,
            }
            getBooksAction(queryParams)
        }
    }, [])

    const searchBooksByButton = useCallback(() => {
        if (ref.current) {
            setQueryLimit(INITIAL_QUERY_LIMIT)
            setCategoryKey(CategoryKeyType.ALL)
            const queryParams: QueryParamsType = {
                queryLimit: queryLimit,
                search: ref.current.toLowerCase(),
                orderBy: sortKey,
                categoryBy: CategoryKeyType.ALL,
            }
            getBooksAction(queryParams)
        }
    }, [])

    const handleFilterBooks = useCallback((key: CategoryKeyType) => {
        const queryParams: QueryParamsType = {
            queryLimit: INITIAL_QUERY_LIMIT,
            search: ref.current.toLowerCase(),
            orderBy: sortKey,
            categoryBy: categoryKey,
        }
        setCategoryKey(key)
        if (key !== CategoryKeyType.ALL) {
            getFilteredBooks(queryParams, key).then()
        } else {
            getBooksAction(queryParams)
        } 
    }, [])

    const handleChangeQueryLimit = useCallback(() => {
        setQueryLimit(queryLimit + PAGINATION_STEP)
    }, [])

    if (error) return <h3>{error}</h3>

    return (
        <>
            <Header
                handleChangeSearch = {handleChangeSearch}
                searchBooksByEnter = {searchBooksByEnter}
                searchBooksByButton = {searchBooksByButton}
                sortKey = {sortKey}
                setSortKey = {setSortKey}
                categoryKey = {categoryKey}
                setCategoryKey = {setCategoryKey}
                handleFilterBooks = {handleFilterBooks}
            />
            <Routes>
                <Route path = "/" element = {
                    <CommonLayout/>
                }>
                    <Route path = "/" element = {
                        <BooksPage
                            books = {books}
                            isLoading = {isLoading}
                            totalItems = {totalItems}
                            handleChangeQueryLimit = {handleChangeQueryLimit}
                        />
                    }/>
                    <Route path = "/:id" element = {
                        <BookFullInfo/>
                    }/>
                    <Route path = "*" element = {
                        <ErrorPage/>
                    }/>
                </Route>
            </Routes>
        </>
    )
}

export default observer(AppLayout)