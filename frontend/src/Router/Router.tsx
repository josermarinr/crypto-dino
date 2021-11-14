import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SideBar } from "../components/layouts/Sidebar/SideBar";
import { WrapLayout } from "../components/layouts/WrapLayout/WrapLayout";

import { Home } from "../page/Home/Home";

export const Router = () => {
    return (
        <BrowserRouter>
            <WrapLayout>
                <SideBar />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                </Routes>
            </WrapLayout>
        </BrowserRouter>
    );
};
