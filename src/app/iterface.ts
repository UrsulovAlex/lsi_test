export interface IRates {
    currency: string,
    code: string,
    mid: number,
}

export interface ICurrency {
    table: string,
    effectiveDate: string,
    no: string,
    rates: IRates[],
}