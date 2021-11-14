import React from "react";
import { UseCurrencies } from "./UseCurrencies";

export const ElementTest = ({ value }: { value: string }) => {
    return <div>{value}</div>;
};

export const ElementTestTwo = () => {
    const value = UseCurrencies();
    console.log(value);
    return <div>{value}</div>;
};
