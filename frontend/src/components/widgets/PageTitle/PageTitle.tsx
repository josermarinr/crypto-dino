import React from "react";

export const PageTitle = ({
    classname,
    title,
}: {
    classname?: string;
    title: string;
}) => {
    return <h1 className={classname}>{title}</h1>;
};
