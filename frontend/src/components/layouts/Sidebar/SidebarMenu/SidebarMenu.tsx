import React from "react";
import CSS from "./SidebarMenu.module.scss";
import {
    faChartBar,
    faClone,
    faUser,
} from "@fortawesome/free-regular-svg-icons";
import { faList } from "@fortawesome/free-solid-svg-icons";
import { IconLink } from "../../../widgets/IconLink/IconLink";
import { Logo } from "../../../widgets/Logo/Logo";

export const SidebarMenu = () => {
    return (
        <div className={CSS.sidebarMenu}>
            <Logo className={CSS.logo} />
            <IconLink
                url="/all-currencies"
                className={CSS.element}
                icon={faClone}
            />
            <IconLink
                url="/all-currencies"
                className={CSS.element}
                icon={faChartBar}
            />
            <IconLink
                url="/all-currencies"
                className={CSS.element}
                icon={faList}
            />
            <IconLink
                url="/all-currencies"
                className={CSS.element}
                icon={faUser}
            />
        </div>
    );
};
