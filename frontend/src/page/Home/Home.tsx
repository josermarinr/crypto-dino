import React from "react";
import { ContentSide } from "../../components/layouts/ContentSide/ContentSide";
import { SideBar } from "../../components/layouts/Sidebar/SideBar";
import { WrapLayout } from "../../components/layouts/WrapLayout/WrapLayout";
import { HomeContent } from "./HomeContent/HomeContent";
import { HomeSidebar } from "./HomeSidebar/HomeSidebar";

export const Home = () => {
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
