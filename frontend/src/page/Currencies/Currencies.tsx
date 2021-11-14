import React from "react";
import { PageTitle } from "../../components/widgets/PageTitle/PageTitle";
import { CurrenciesTable } from "./CurrenciesTable/CurrenciesTable";

export const Currencies = () => {
    return (
        <div>
            <PageTitle title="All Currencies" />
            <CurrenciesTable />
        </div>
    );
};
