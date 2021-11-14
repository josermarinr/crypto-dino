import React from "react";
import CSS from "./Card.module.scss";

export const Card: React.FunctionComponent<{ className?: string }> = ({
    children,
    className,
}) => {
    const style = `${CSS.card} ${className}`;
    return <div className={style}>{children}</div>;
};
