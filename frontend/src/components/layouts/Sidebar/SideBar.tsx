import React from "react";
import CSS from "./SideBar.module.scss";
import { SidebarMenu } from "./SidebarMenu/SidebarMenu";

export const SideBar = () => {
    return (
        <div className={CSS.sidebar}>
            <SidebarMenu />
        </div>
    );
};
