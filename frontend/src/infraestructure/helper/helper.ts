import { CurrenciesModel } from "../context/GeneralContext";

export function sortDataByPercent(data: CurrenciesModel[] | undefined) {
    return data?.sort(
        (a, b) => Number(b.changePercent24Hr) - Number(a.changePercent24Hr)
    );
}

export function sortDataByPrice(data: CurrenciesModel[] | undefined) {
    return data?.sort((a, b) => Number(b.priceUsd) - Number(a.priceUsd));
}
