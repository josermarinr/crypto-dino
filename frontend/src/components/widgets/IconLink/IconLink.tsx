import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import CSS from "./IconLink.module.scss";

export interface IconLinkProps {
    url: string;
    className?: string;
    icon: IconProp;
}
export const IconLink = ({ url, className, icon }: IconLinkProps) => {
    const classname = `${CSS.iconLink} ${className}`;
    return (
        <div className={classname}>
            <Link to={url}>
                <FontAwesomeIcon icon={icon} className={CSS.iconColor} />
            </Link>
        </div>
    );
};
