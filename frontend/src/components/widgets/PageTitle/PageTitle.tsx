import React from "react";
import { useLocation } from "react-router-dom";

export const PageTitle = ({ classname }: { classname?: string }) => {
    const path = useLocation().pathname.split("/")[0];
    const title = path === "" ? "Home" : path;

    return <h1 className={classname}>{title}</h1>;
};
