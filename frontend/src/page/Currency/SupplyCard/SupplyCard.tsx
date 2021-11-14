import React from "react";
import { Card } from "../../../components/widgets/Card/Card";
import { Currency } from "../../../infraestructure/interfaces/interfaces";
import CSS from "./SupplyCard.module.scss";

export const SupplyCard = ({ data }: { data: Currency }) => {
    return (
        <Card className={CSS.supplyCard}>
            <h2>Supply</h2>
            <div className={CSS.flexContainer}>
                <div className={CSS.maxSupply}>
                    <p>Max supply</p>
                    <h1>{Number(data.maxSupply).toFixed(2)}</h1>
                </div>
                <div className={CSS.supply}>
                    <p>Supply</p>
                    <h1>{Number(data.supply).toFixed(2)}</h1>
                </div>
            </div>
        </Card>
    );
};
