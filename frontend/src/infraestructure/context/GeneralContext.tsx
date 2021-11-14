import * as React from "react";
import { Spiner } from "../../components/widgets/Spiner/Spiner";
import { UseCurrencies } from "../graphql/UseCurrencies";
import { Currency } from "../interfaces/interfaces";

export interface GeneralData {
    currencie?: Currency[];
    size?: number;
}

export const GeneralContext = React.createContext<GeneralData>({
    currencie: undefined,
    size: undefined,
});

export const GeneralProvider: React.FunctionComponent = ({ children }) => {
    const { value, loading } = UseCurrencies();
    if (loading) <Spiner />;
    return (
        <GeneralContext.Provider value={value}>
            {children}
        </GeneralContext.Provider>
    );
};
