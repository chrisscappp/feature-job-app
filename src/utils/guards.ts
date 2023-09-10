import { IBook } from "../models"

export function isBook(b: IBook | undefined): b is IBook {
    return (b as IBook).id !== undefined
}