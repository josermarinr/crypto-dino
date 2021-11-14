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
                url="/notification"
                className={CSS.element}
                icon={faClone}
            />
            <IconLink url="/aa" className={CSS.element} icon={faChartBar} />
            <IconLink url="/bb" className={CSS.element} icon={faList} />
            <IconLink url="/cc" className={CSS.element} icon={faUser} />
        </div>
    );
};
