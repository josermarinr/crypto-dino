import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import CSS from "./SearchBar.module.scss";

export interface SearchBarprops {
    onSubmit?: (ev: string) => void;
}

export const SearchBar = ({onSubmit}:SearchBarprops) => {
    return (
        <div className={CSS.searchBar}>
            <span>
                <FontAwesomeIcon icon={faSearch} className={CSS.iconColor} />
            </span>
            <input type="text" onSubmit={(ev)=>onSubmit?onSubmit(ev.currentTarget.value):null}></input>
        </div>
    );
};
