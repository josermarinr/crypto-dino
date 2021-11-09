import React from "react";
import CSS from "./SideBar.module.scss";

export const SideBar: React.FunctionComponent = ({ children }) => {
    return <div className={CSS.sidebar}>{children}</div>;
};
