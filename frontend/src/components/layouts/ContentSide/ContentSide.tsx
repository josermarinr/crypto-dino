import React from "react";
import CSS from "./ContentSide.module.scss";

export const ContentSide: React.FunctionComponent = ({ children }) => {
    return <div className={CSS.contentSide}>{children}</div>;
};
