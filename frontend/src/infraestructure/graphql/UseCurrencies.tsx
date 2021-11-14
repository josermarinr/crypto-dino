import { gql, useQuery } from "@apollo/client";
import { GeneralData } from "../context/GeneralContext";
import { Mock } from "../mocks/CurrenciesMock";

export const CURRENCIES = gql`
    query {
        currencies {
            currencie {
                id
                rank
                symbol
                name
                supply
                maxSupply
                marketCapUsd
                volumeUsd24Hr
                priceUsd
                changePercent24Hr
                vwap24Hr
            }
        }
    }
`;

export const UseCurrencies = () => {
    const { data, loading, error } = useQuery(CURRENCIES);
    let value: GeneralData = data?.currencies;

    if (data === undefined || error) {
        if (error) {
            console.error(`you have a error, 😢 ${error} `);
        }
        if (data === undefined) {
            console.warn(
                `you're use stored data, your last updete is ${Mock.lastUpdate} `
            );
        }
        value = Mock.data;
    }

    return { value, loading };
};
