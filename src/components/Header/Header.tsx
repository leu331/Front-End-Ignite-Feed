import React from "react";
import styles from "./styles.module.css"

import igniteLogo from "../../assets/ignite-logo.svg"

export function Header(){
    return (
    <header className={styles.header}>
        <a href="#">
            <img src={igniteLogo} alt="" />
        </a>
    </header>
    )
}