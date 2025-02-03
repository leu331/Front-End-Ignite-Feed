import React from "react";
import styles from "./styles.module.css"
import pencilIcon from "../../assets/pencil-icon.svg"
import { PencilLine } from "phosphor-react";
import { Avatar } from "../Avatar/Avatar";

export function Sidebar(){
    return(
        <aside className={styles.sidebar}>
            <img src="https://plus.unsplash.com/premium_photo-1663023612721-e588768ef403?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZGV2ZWxvcGVyfGVufDB8fDB8fHww" alt=""  id="cover"/>

            <div className={styles.profile}>
            <Avatar hasBorder={true} src="https://github.com/leu331.png" alt="" /> {/*como será dinâmico, o usuário poderá puxar sua foto de onde quiser que o estilo já será aplicado*/}
                <h1>Leuzimar Bezerra</h1>
                <p>Full-Stack Developer</p>
            </div>

            <div className={styles.divider}></div>

            <footer>
                <a href="#">
                        <PencilLine />
                        Editar seu perfil
                    
                </a>
            </footer>
        </aside>
    )
}