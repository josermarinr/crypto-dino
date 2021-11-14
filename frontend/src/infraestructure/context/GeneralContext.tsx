import * as React from "react";
import { LoandingCard } from "../../components/widgets/LoandingCard/LoandingCard";
import { UseCurrencies } from "../graphql/UseCurrencies";
import { Mock } from "./Mock";

export interface CurrenciesModel {
    id: String;
    rank: String;
    symbol: String;
    name: String;
    supply: String;
    maxSupply: String;
    marketCapUsd: String;
    volumeUsd24Hr: String;
    priceUsd: String;
    changePercent24Hr: String;
    vwap24Hr: String;
}
export interface GeneralData {
    currency?: CurrenciesModel[];
    size?: number;
}

export const GeneralContext = React.createContext<GeneralData>({
    currency: undefined,
    size: undefined,
});

export const GeneralProvider: React.FunctionComponent = ({ children }) => {
    const { data, loading, error } = UseCurrencies();
    let value = data;

    if (loading) {
        return <LoandingCard />;
    }

    if (data === undefined && error) {
        if (error) {
            console.error(`you have a error  ${error} `);
        }
        if (data === undefined) {
            console.warn(
                `you're use stored data, your last updete is ${Mock.lastUpdate} `
            );
        }
        value = Mock.data;
    }
    return (
        <GeneralContext.Provider value={value}>
            {children}
        </GeneralContext.Provider>
    );
};
