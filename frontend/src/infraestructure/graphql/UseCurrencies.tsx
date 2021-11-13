import { gql, useQuery } from "@apollo/client";

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
    return { data, loading, error };
};
