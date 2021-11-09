import React from "react";
import { Link } from "react-router-dom";
import CSS from "./Logo.module.scss";

export const Logo = () => {
    return (
        <div className={CSS.logo}>
            <Link to={"/"}>
                <img src="/logo.png" alt="Cryto dino" />
            </Link>
        </div>
    );
};
