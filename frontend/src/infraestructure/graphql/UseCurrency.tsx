import { gql, useQuery } from "@apollo/client";
import { Spiner } from "../../components/widgets/Spiner/Spiner";
import { currencyMock } from "../mocks/currencyMock";

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
    let value = data;

    if (loading) {
        return <Spiner />;
    }

    if (data === undefined || error) {
        if (error) {
            console.error(`you have a error, 😢 ${error} `);
        }
        if (data === undefined) {
            console.warn(
                `you're use stored data, your last updete is ${currencyMock.lastUpdate} `
            );
        }
        value = currencyMock.currencie;
    }

    return value;
};
