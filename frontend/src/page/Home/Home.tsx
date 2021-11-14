import React from "react";
import CSS from "./Home.module.scss";
import { PageTitle } from "../../components/widgets/PageTitle/PageTitle";
import { SearchBar } from "../../components/widgets/SearchBar/SearchBar";
import { UseCurrency } from "../../infraestructure/graphql/UseCurrency";
import { UseCurrencies } from "../../infraestructure/graphql/UseCurrencies";

export const Home = () => {
    const { data } = UseCurrencies();
    console.log(data);
    return (
        <div className={CSS.home}>
            <div className={CSS.flexContainer}>
                <div className={CSS.firstBlock}>
                    <PageTitle classname={CSS.title} />
                    <SearchBar onSubmit={(ev) => console.log(ev)} />
                </div>
                <div className={CSS.secondBlock}>
                    <PageTitle />
                    <SearchBar onSubmit={(ev) => console.log(ev)} />
                </div>
            </div>
        </div>
    );
};
