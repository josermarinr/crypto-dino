import React, { useContext } from "react";
import { ButtonRedirect } from "../../../components/widgets/ButtonRedirect/ButtonRedirect";
import { Card } from "../../../components/widgets/Card/Card";
import { ArrowGreenIcon } from "../../../components/widgets/Icons/ArrowGreenIcon";
import { ArrowReedIcon } from "../../../components/widgets/Icons/ArrowRedIcon";
import { DoubleArrowGreenIcon } from "../../../components/widgets/Icons/DoubleArrowGreenIcon";
import { GeneralContext } from "../../../infraestructure/context/GeneralContext";
import CSS from "./CurrenciesTable.module.scss";

export const CurrenciesTable = () => {
    const data = useContext(GeneralContext);

    return (
        <Card className={CSS.currenciesTable}>
            <div className={CSS.redirectButton}>
                <ButtonRedirect goto="/" title="Go Back" />
            </div>
            <div className={CSS.tableWrapper}>
                <table className={CSS.table}>
                    <thead>
                        <th>Rank</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Symbol</th>
                        <th>Supply</th>
                        <th>Max supply</th>
                        <th>Market</th>
                        <th>Volume of Usd in 24Hr</th>
                        <th>Percent</th>
                        <th>Volume Weighted Average</th>
                    </thead>
                    <tbody>
                        {data?.currencie?.map((curr) => {
                            return (
                                <tr className={CSS.row}>
                                    <td>{curr.rank}</td>
                                    <td>{curr.name}</td>
                                    <td>{Number(curr.priceUsd).toFixed(2)}</td>
                                    <td>{curr.symbol}</td>
                                    <td>{Number(curr.supply).toFixed(1)}</td>
                                    <td>{Number(curr.maxSupply).toFixed(1)}</td>
                                    <td>
                                        {Number(curr.marketCapUsd).toFixed(2)}
                                    </td>
                                    <td>
                                        {Number(curr.volumeUsd24Hr).toFixed(2)}
                                    </td>
                                    <td className={CSS.lastCell}>
                                        {Number(curr.changePercent24Hr) > 0
                                            ? Number(curr.changePercent24Hr) >
                                              10
                                                ? DoubleArrowGreenIcon
                                                : ArrowGreenIcon
                                            : ArrowReedIcon}
                                        {Number(curr.changePercent24Hr).toFixed(
                                            3
                                        )}{" "}
                                        %
                                    </td>
                                    <td>{Number(curr.vwap24Hr).toFixed(2)}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        </Card>
    );
};
