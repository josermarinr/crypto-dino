import { Currency } from "../interfaces/interfaces";

export function sortDataByPercent(data: Currency[]) {
    return data
        .slice()
        .sort(
            (a, b) => Number(b.changePercent24Hr) - Number(a.changePercent24Hr)
        );
}

export function sortDataByPrice(data: Currency[]) {
    const result = [...data];
    return result
        .slice()
        .sort((a, b) => Number(b.priceUsd) - Number(a.priceUsd));
}
