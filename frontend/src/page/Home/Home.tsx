import React from "react";
import CSS from "./Home.module.scss";
import { PageTitle } from "../../components/widgets/PageTitle/PageTitle";
import { SearchBar } from "../../components/widgets/SearchBar/SearchBar";
import { SummaryDayIncrease } from "./SummaryDayIncrease/SummaryDayIncrease";
import { SummaryDayPrice } from "./SummaryDayPrice/SummaryDayPrice";
import { useNavigate } from "react-router-dom";

export const Home = () => {
    let navigate = useNavigate();
    const handlerSearch = async (ev: string) => {
        if (ev === "") return null;
        navigate(`/currency/${ev.toLowerCase()}`);
    };

    return (
        <div className={CSS.home}>
            <div className={CSS.flexContainer}>
                <div className={CSS.firstBlock}>
                    <PageTitle classname={CSS.title} title="Home" />
                    <SearchBar
                        onSubmit={(ev) => {
                            handlerSearch(ev);
                        }}
                    />
                    <SummaryDayPrice />
                </div>
                <div className={CSS.secondBlock}>
                    <SummaryDayIncrease />
                </div>
            </div>
        </div>
    );
};
