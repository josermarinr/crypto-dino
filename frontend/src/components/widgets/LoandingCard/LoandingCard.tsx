import React from "react";
import CSS from "./LoandingCard.module.scss";
import { Card } from "../Card/Card";

export const LoandingCard = () => {
    return (
        <div className={CSS.loandingCard}>
            <Card>
                <h3>
                    Hello @everyone, not hesitated to see my{" "}
                    <a href=" https://www.figma.com/file/DLz0DavkDW55Ffrmew2JnO/CV?node-id=3%3A8">
                        CV
                    </a>
                    or my{" "}
                    <a href="https://www.linkedin.com/in/josermarinr/">
                        LinkedIn
                    </a>
                </h3>
            </Card>
        </div>
    );
};
