import React from "react";
import CSS from "./HomeSidebar.module.scss";
import { faComment, faStar, faSun } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { RoundedLink } from "../../../components/widgets/RoundedLink/RoundedLink";

export const HomeSidebar = () => {
    return (
        <div className={CSS.homeSidebar}>
            <RoundedLink url="/notification" className={CSS.element}>
                <FontAwesomeIcon icon={faComment} className={CSS.iconColor} />
            </RoundedLink>
            <RoundedLink url="/star" className={CSS.element}>
                <FontAwesomeIcon icon={faStar} className={CSS.iconColor} />
            </RoundedLink>
            <RoundedLink url="/settings" className={CSS.element}>
                <FontAwesomeIcon icon={faSun} className={CSS.iconColor} />
            </RoundedLink>
        </div>
    );
};
