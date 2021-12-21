enum SortDirection {
    ASC = "1",
    DES = "-1"
}

export type GetRequestParams = {
    sortDirection: SortDirection,
    sortBy: string,
    limit: string,
    page: string
}