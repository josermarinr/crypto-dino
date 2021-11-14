import React from "react";
import { useParams } from "react-router-dom";
import { Card } from "../../components/widgets/Card/Card";
import { PageTitle } from "../../components/widgets/PageTitle/PageTitle";
import { Spiner } from "../../components/widgets/Spiner/Spiner";
import { UseCurrency } from "../../infraestructure/graphql/UseCurrency";
import CSS from "./Currency.module.scss";

export const Currency = () => {
    const { id } = useParams() as any;
    const { data, loading } = UseCurrency(id);
    console.log(data);

    if (data === undefined) {
        return (
            <Card className={CSS.emptyState}>
                <h1>
                    the crypto <span className={CSS.emptyState__id}>{id}</span>{" "}
                    is not found or we have a problem 🚀
                </h1>
                <Spiner />
            </Card>
        );
    }
    return (
        <div>
            <PageTitle title={id} />
        </div>
    );
};
