import React from "react";
import CSS from "./WrapLayout.module.scss";

export const WrapLayout: React.FunctionComponent = ({ children }) => {
    return <div className={CSS.wrapLayout}>{children}</div>;
};
