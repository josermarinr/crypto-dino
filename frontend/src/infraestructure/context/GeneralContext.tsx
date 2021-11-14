import * as React from "react";
import { UseCurrencies } from "../graphql/UseCurrencies";

export interface CurrenciesModel {
    id: String;
    rank: String;
    symbol: String;
    name: String;
    supply: String;
    maxSupply: String | null;
    marketCapUsd: String;
    volumeUsd24Hr: String;
    priceUsd: String;
    changePercent24Hr: String;
    vwap24Hr: String | null;
}
export interface GeneralData {
    currencie?: CurrenciesModel[];
    size?: number;
}

export const GeneralContext = React.createContext<GeneralData>({
    currencie: undefined,
    size: undefined,
});

export const GeneralProvider: React.FunctionComponent = ({ children }) => {
    const { value } = UseCurrencies();

    return (
        <GeneralContext.Provider value={value}>
            {children}
        </GeneralContext.Provider>
    );
};
