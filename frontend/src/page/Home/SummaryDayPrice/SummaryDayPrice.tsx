import React, { useContext } from "react";
import { ButtonRedirect } from "../../../components/widgets/ButtonRedirect/ButtonRedirect";
import { Card } from "../../../components/widgets/Card/Card";
import { ArrowGreenIcon } from "../../../components/widgets/Icons/ArrowGreenIcon";
import { DoubleArrowGreenIcon } from "../../../components/widgets/Icons/DoubleArrowGreenIcon";
import { GeneralContext } from "../../../infraestructure/context/GeneralContext";
import { sortDataByPrice } from "../../../infraestructure/helper/helper";
import CSS from "./SummaryDayPrice.module.scss";

export const SummaryDayPrice = () => {
    const data = useContext(GeneralContext);

    const summaryData =
        data.currencie === undefined
            ? data.currencie
            : sortDataByPrice(data.currencie);

    return (
        <Card className={CSS.summaryDay}>
            <h3>Most expensive</h3>
            <table className={CSS.table}>
                <thead>
                    <td>Name</td>
                    <td>Price</td>
                    <td>Rank</td>
                </thead>
                <tbody>
                    {summaryData?.slice(0, 10).map((curr) => {
                        return (
                            <tr className={CSS.row}>
                                <td>{curr.name}</td>
                                <td>{Number(curr.priceUsd).toFixed(2)}</td>
                                <td className={CSS.lastCell}>
                                    {Number(curr.rank) < 5
                                        ? DoubleArrowGreenIcon
                                        : ArrowGreenIcon}
                                    {Number(curr.rank)}
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
