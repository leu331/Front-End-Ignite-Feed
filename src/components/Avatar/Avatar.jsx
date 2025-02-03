import React from "react";
import styles from './styles.module.css'

export function Avatar ({hasBorder = true, src}) { //o padrão de hasBorder é true

    return (
    <div>              
        <img className={hasBorder ? styles.avatarWithBorder : styles.avatar } src={src} alt=""/> 
    </div> //se o avatar tiver borda, uma classe, se nao tiver, outra classe
    )
}