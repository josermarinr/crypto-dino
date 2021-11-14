import React from "react";
import { ContentSide } from "../../components/layouts/ContentSide/ContentSide";
import { WrapLayout } from "../../components/layouts/WrapLayout/WrapLayout";
import { UseCurrency } from "../../infraestructure/graphql/UseCurrency";
import { HomeContent } from "./HomeContent/HomeContent";

export const Home = () => {
    const { data } = UseCurrency("bitcoin");
    console.log(data);
    return (
        <WrapLayout>
            <ContentSide>
                <HomeContent />
            </ContentSide>
        </WrapLayout>
    );
};
