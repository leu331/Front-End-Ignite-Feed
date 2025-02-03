import React, { useState } from "react";
import styles from './styles.module.css'
import { Trash } from "phosphor-react";
import {ThumbsUp} from "phosphor-react";
import { Avatar } from "../Avatar/Avatar";

import {format, formatDistanceToNow} from 'date-fns'
import { ptBR } from "date-fns/locale";

export function Comments ({content, onDeleteComment, publishedAt}) {
    const [likes, setLikes] = useState(0)

    function handleNewLike() {

        setLikes(likes + 1); 
    }

    //data para o comentário
    const publishedDateToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    function handleDeleteComment(){
        onDeleteComment(content)
    }

    return (
        <div className="container">
            <div className={styles.comments}>
                <div className={styles.profile}>
                    <Avatar hasBorder={false} src="https://github.com/lic3as.png"/>

                    <div className={styles.infos}>
                        <div className=""></div>
                        <h2>Alice Aquino</h2>
                       <div className={styles.deleteComment}> {/*os botoes estavam dentro do form e tinham o padrao onsubmit, por isso que ao clicar em qualquer um, adicionava um comentario*/}
                            <button type="button" className={styles.trashIcon}  title="Deletar comentário" onClick={handleDeleteComment}>
                                <Trash/>
                            </button>
                         </div>
                        <time title="10 de janeiro" dateTime="10/01/2025 10:53">{publishedDateToNow}</time>
                        <br />
                         <p>{content}</p>
                    </div> 
                  
                </div>
            </div>
            <div className={styles.consd}>
                <div className={styles.likeIcon}>
                    <button onClick={handleNewLike} type="button">
                    <ThumbsUp/>
                    </button>
                </div>

                <div className={styles.like}>
                    <p>Aplaudir</p>
                    <p> {likes}</p>
                </div>
            </div>
        </div>
        
    )
}