import React from "react";
import CSS from "./ButtonAction.module.scss";

export const ButtonAction = ({
    action,
    className,
    title,
}: {
    action: () => void;
    className?: string;
    title: string;
}) => {
    const style = `${CSS.buttonRedirect} ${className}`;
    return (
        <div onClick={action} className={style}>
            {title}
        </div>
    );
};
