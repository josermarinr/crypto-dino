import {
    faBell,
    faComment,
    faStar,
    faSun,
} from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { RoundedLink } from "../../widgets/RoundedLink/RoundedLink";
import { SearchBar } from "../../widgets/SearchBar/SearchBar";
import CSS from "./Header.module.scss";
import { Logo } from "./Logo/Logo";

export const Header = () => {
    return (
        <div className={CSS.header}>
            <Logo />
            <div className={CSS.header__navigation}>
                <SearchBar />
                <RoundedLink url="/notification">
                    <FontAwesomeIcon icon={faBell} className={CSS.iconColor} />
                </RoundedLink>
                <RoundedLink url="/notification">
                    <FontAwesomeIcon
                        icon={faComment}
                        className={CSS.iconColor}
                    />
                </RoundedLink>
                <RoundedLink url="/star">
                    <FontAwesomeIcon icon={faStar} className={CSS.iconColor} />
                </RoundedLink>
                <RoundedLink url="/settings">
                    <FontAwesomeIcon icon={faSun} className={CSS.iconColor} />
                </RoundedLink>
            </div>
        </div>
    );
};
