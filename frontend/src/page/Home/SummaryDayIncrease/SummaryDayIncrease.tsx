import React, { useContext } from "react";
import { ButtonRedirect } from "../../../components/widgets/ButtonRedirect/ButtonRedirect";
import { Card } from "../../../components/widgets/Card/Card";
import { ArrowGreenIcon } from "../../../components/widgets/Icons/ArrowGreenIcon";
import { DoubleArrowGreenIcon } from "../../../components/widgets/Icons/DoubleArrowGreenIcon";
import { GeneralContext } from "../../../infraestructure/context/GeneralContext";
import { sortDataByPercent } from "../../../infraestructure/helper/helper";
import CSS from "./SummaryDayIncrease.module.scss";

export const SummaryDayIncrease = () => {
    const currency = useContext(GeneralContext);

    const summaryData =
        currency?.currencie !== undefined
            ? sortDataByPercent(currency?.currencie)
            : currency?.currencie;

    console.log(currency);

    return (
        <Card className={CSS.summaryDay}>
            <h3>Summary day increase</h3>
            <table className={CSS.table}>
                <thead>
                    <td>Name</td>
                    <td>Price</td>
                    <td>24 h Change</td>
                </thead>
                <tbody>
                    {summaryData?.slice(0, 10).map((curr) => {
                        return (
                            <tr className={CSS.row}>
                                <td>{curr.name}</td>
                                <td>{Number(curr.priceUsd).toFixed(2)}</td>
                                <td className={CSS.lastCell}>
                                    {Number(curr.changePercent24Hr) > 10
                                        ? DoubleArrowGreenIcon
                                        : ArrowGreenIcon}
                                    {Number(curr.changePercent24Hr).toFixed(3)}
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
            <div className={CSS.redirectButton}>
                <ButtonRedirect
                    goto="/all-currencies"
                    title="More currencies"
                />
            </div>
        </Card>
    );
};
