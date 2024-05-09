import { INew } from "./new.interface"

export interface IRequestNew {
    status: string
    totalResults: number
    results: INew[]
    nextPage: string
}