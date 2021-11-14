import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ContentSide } from "../components/layouts/ContentSide/ContentSide";
import { SideBar } from "../components/layouts/Sidebar/SideBar";
import { WrapLayout } from "../components/layouts/WrapLayout/WrapLayout";

import { Home } from "../page/Home/Home";

export const Router = () => {
    return (
        <BrowserRouter>
            <WrapLayout>
                <SideBar />
                <ContentSide>
                    <Routes>
                        <Route path="/" element={<Home />}></Route>
                    </Routes>
                </ContentSide>
            </WrapLayout>
        </BrowserRouter>
    );
};
