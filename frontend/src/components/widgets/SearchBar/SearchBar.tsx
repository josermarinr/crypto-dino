import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import CSS from "./SearchBar.module.scss";

export interface SearchBarprops {
    onSubmit?: (ev: string) => void;
}

export const SearchBar = ({
    onSubmit = (e) => console.log(e),
}: SearchBarprops) => {
    return (
        <div className={CSS.searchBar}>
            <span>
                <FontAwesomeIcon icon={faSearch} className={CSS.iconColor} />
            </span>
            <input
                type="text"
                onBlur={(ev) => onSubmit(ev.currentTarget.value)}
            />
        </div>
    );
};
