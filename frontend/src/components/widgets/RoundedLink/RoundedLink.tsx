import React from "react";
import { Link } from "react-router-dom";
import CSS from "./RoundedLink.module.scss";

export const RoundedLink: React.FunctionComponent<{
    url: string;
    className?: string;
}> = ({ children, url, className }) => {
    const classname = `${CSS.roundLink} ${className}`;
    return (
        <div className={classname}>
            <Link to={url}>{children}</Link>
        </div>
    );
};
