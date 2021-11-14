import React from "react";
import { Link } from "react-router-dom";
import CSS from "./Logo.module.scss";

export const Logo = ({ className }: { className?: string }) => {
    const style = `${CSS.logo} ${className}`;
    return (
        <div className={style}>
            <Link to={"/"}>
                <img src="/logo.png" alt="Cryto dino" />
            </Link>
        </div>
    );
};
