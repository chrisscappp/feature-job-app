export enum SortKeyType {
    RELEVANCE = "relevance",
    NEWEST = "newest"
}

export enum CategoryKeyType {
    ALL = "all", 
    ART = "art", 
    BIOGRAPHY = "biography", 
    COMPUTERS = "computers", 
    HISTORY = "history", 
    MEDICAL = "medical", 
    POETRY = "poetry"
}

export type QueryParamsType = {
    queryLimit: number,
    search: string,
    orderBy: SortKeyType,
    categoryBy: CategoryKeyType,
}

export type SelectElemSortType = {
    id: string,
    key: SortKeyType
}

export type SelectElemCategoryType = {
    id: string,
    key: CategoryKeyType
}

export interface IImageLinks {
    smallThumbnail: string;
    thumbnail: string;
}

export interface IVolumeInfo {
    allowAnonLogging: boolean,
    authors: string[];
    canonicalVolumeLink: string;
    categories: string[];
    contentVersion: string;
    description: string;
    imageLinks: IImageLinks;
    industryIdentifiers: unknown;
    infoLink: string;
    language: string;
    maturityRating: string;
    pageCount: number;
    panelizationSummary: unknown;
    previewLink: string;
    printType: string;
    publishedDate: string;
    publisher: string;
    readingModes: unknown;
    title: string;
}

export interface IBook {
    accessInfo: unknown;
    etag: string;
    id: string;
    kind: string;
    saleInfo: unknown;
    searchInfo: unknown;
    selfLink: string;
    volumeInfo: IVolumeInfo
}