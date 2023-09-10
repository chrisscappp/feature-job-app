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



export interface IVolumeInfo {
    allowAnonLogging: boolean,
    authors: string[];
    canonicalVolumeLink: string;
    categories: string[];
    contentVersion: string;
    description: string;
    imageLinks: any;
    industryIdentifiers: any;
    infoLink: string;
    language: string;
    maturityRating: string;
    pageCount: number;
    panelizationSummary: any;
    previewLink: string;
    printType: string;
    publishedDate: string;
    publisher: string;
    readingModes: any;
    title: string;
}

export interface IBook {
    accessInfo: any;
    etag: string;
    id: string;
    kind: string;
    saleInfo: any;
    searchInfo: any;
    selfLink: string;
    volumeInfo: IVolumeInfo
}