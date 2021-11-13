import React from "react";
import { ContentSide } from "../../components/layouts/ContentSide/ContentSide";
import { SideBar } from "../../components/layouts/Sidebar/SideBar";
import { WrapLayout } from "../../components/layouts/WrapLayout/WrapLayout";
import { UseCurrencies } from "../../infraestructure/graphql/UseCurrencies";
import { UseCurrency } from "../../infraestructure/graphql/UseCurrency";
import { HomeContent } from "./HomeContent/HomeContent";
import { HomeSidebar } from "./HomeSidebar/HomeSidebar";

export const Home = () => {
    const { data } = UseCurrency("bitcoin");
    console.log(data);
    return (
        <WrapLayout>
            <SideBar>
                <HomeSidebar />
            </SideBar>
            <ContentSide>
                <HomeContent />
            </ContentSide>
        </WrapLayout>
    );
};
