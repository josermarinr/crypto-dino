import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ButtonAction } from "../../components/widgets/ButtonAction/ButtonAction";
import { Card } from "../../components/widgets/Card/Card";
import { PageTitle } from "../../components/widgets/PageTitle/PageTitle";
import { Spiner } from "../../components/widgets/Spiner/Spiner";
import { UseCurrency } from "../../infraestructure/graphql/UseCurrency";
import CSS from "./Currency.module.scss";
import { PriceCard } from "./PriceCard/PriceCard";
import { RankCard } from "./RankCard/RankCard";
import { SupplyCard } from "./SupplyCard/SupplyCard";
import { VolumeCard } from "./VolumeCard/VolumeCard";

export const Currency = () => {
    const { id } = useParams() as any;
    const { value, loading } = UseCurrency(id);
    let navigate = useNavigate();

    if (loading) <Spiner />;

    if (value === undefined) {
        return (
            <Card className={CSS.emptyState}>
                <h1>
                    the crypto <span className={CSS.emptyState__id}>{id}</span>{" "}
                    is not found or we have a problem 🚀
                </h1>
                <Spiner />
                <div className={CSS.goBack}>
                    <ButtonAction action={() => navigate(-1)} title="go back" />
                </div>
            </Card>
        );
    }
    return (
        <div>
            <PageTitle title={id} />
            <div className={CSS.flexContainer}>
                <div>
                    <RankCard data={value} />
                    <PriceCard data={value} />
                </div>
                <div className={CSS.flexContainer}>
                    <VolumeCard data={value} />
                </div>
            </div>
            <SupplyCard data={value} />
        </div>
    );
};
