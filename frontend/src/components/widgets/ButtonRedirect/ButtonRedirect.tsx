import React from "react";
import CSS from "./ButtonRedirect.module.scss";
import { Link } from "react-router-dom";

export const ButtonRedirect = ({
    goto,
    className,
    title,
}: {
    goto: string;
    className?: string;
    title: string;
}) => {
    const style = `${CSS.buttonRedirect} ${className}`;
    return (
        <Link to={goto} className={style}>
            {title}
        </Link>
    );
};
