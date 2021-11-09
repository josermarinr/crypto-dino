import React from "react";
import CSS from "./Card.module.scss";

export const Card: React.FunctionComponent = ({ children }) => {
    return <div className={CSS.card}>{children}</div>;
};
