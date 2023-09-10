import { makeAutoObservable, runInAction  } from "mobx"
import { getData } from "../api/get"
import { API_KEY } from "../utils/apiKey"
import { ENV } from "../utils/constants"
import { CategoryKeyType, QueryParamsType, IBook } from "../models"
import AxiosError from "axios-error"

class BooksStore {
    books: IBook[] = []
    totalItems = 0
    isLoading = false
    error = ""

    constructor() {
        makeAutoObservable(this)
    }

    getBooksAction = async (queryParams: QueryParamsType) => {
        try {
            const url = ENV + `q=${queryParams.search}&orderBy=${queryParams.orderBy}&key=${API_KEY}&maxResults=${queryParams.queryLimit}`
            this.isLoading = true
            const res = await getData(url)
            runInAction(() => {
                this.books = res.items
                this.totalItems = res.totalItems
                this.isLoading = false
                this.error = ""
            })
        } catch (e: unknown) {
            const err = e as AxiosError
            this.error = err.message
            this.isLoading = false
        }
    }

    getFilteredBooks = async (queryParams: QueryParamsType, key: CategoryKeyType) => {
        await this.getBooksAction(queryParams)
        let tmp: any[] = []
    
        this.books.forEach((book: any) => {
            if (book.volumeInfo.categories) {
                book.volumeInfo.categories.forEach((item: any) => {
                    if (item.toLowerCase() === key) {
                        tmp.push(book)
                    }
                })
            }
        })
        this.books = tmp
    }
}

export default BooksStore