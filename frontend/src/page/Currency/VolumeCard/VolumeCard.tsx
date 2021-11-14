import React from "react";
import { Card } from "../../../components/widgets/Card/Card";
import { ArrowGreenIcon } from "../../../components/widgets/Icons/ArrowGreenIcon";
import { ArrowReedIcon } from "../../../components/widgets/Icons/ArrowRedIcon";
import { Currency } from "../../../infraestructure/interfaces/interfaces";
import CSS from "./VolumeCard.module.scss";

export const VolumeCard = ({ data }: { data: Currency }) => {
    return (
        <Card className={CSS.volumeCard}>
            <h2>Volume</h2>
            <div>
                <p>Volume Usd 24h</p>
                <h1>{Number(data.volumeUsd24Hr).toFixed(4)}</h1>
                <p>Percent 24h</p>
                <h1 className={CSS.percent}>
                    {Number(data.changePercent24Hr).toFixed(4)} %
                    {Number(data.changePercent24Hr) < 0
                        ? ArrowReedIcon
                        : ArrowGreenIcon}
                </h1>
            </div>
        </Card>
    );
};
