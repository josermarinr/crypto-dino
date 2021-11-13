import { gql, useQuery } from "@apollo/client";

export const FIND_CURRENCY = gql`
    query currencie($crypto: String!) {
        currencie(crypto: $crypto) {
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
`;

export const UseCurrency = (crypto: string) => {
    const { data, loading, error } = useQuery(FIND_CURRENCY, {
        variables: {
            crypto: crypto,
        },
    });
    return { data, loading, error };
};
