import React from "react";
import { Card } from "../../../components/widgets/Card/Card";
import { Currency } from "../../../infraestructure/interfaces/interfaces";
import CSS from "./PriceCard.module.scss";

export const PriceCard = ({ data }: { data: Currency }) => {
    return (
        <Card className={CSS.priceCard}>
            <h2>Price</h2>
            <h1>{Number(data.priceUsd).toFixed(2)} $</h1>
        </Card>
    );
};
