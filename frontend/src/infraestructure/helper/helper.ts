import { Currency } from "../interfaces/interfaces";

export function sortDataByPercent(data: Currency[] | undefined) {
    return data?.sort(
        (a, b) => Number(b.changePercent24Hr) - Number(a.changePercent24Hr)
    );
}

export function sortDataByPrice(data: Currency[] | undefined) {
    return data?.sort((a, b) => Number(b.priceUsd) - Number(a.priceUsd));
}
