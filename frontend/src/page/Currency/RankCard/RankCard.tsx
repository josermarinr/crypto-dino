import React from "react";
import { Card } from "../../../components/widgets/Card/Card";
import { Currency } from "../../../infraestructure/interfaces/interfaces";
import CSS from "./RankCard.module.scss";

export const RankCard = ({ data }: { data: Currency }) => {
    return (
        <Card className={CSS.rankCard}>
            <h2>Rank</h2>
            <h1>
                {data.rank} {Number(data.rank) < 10 ? "⭐️ " : ""}
            </h1>
        </Card>
    );
};
