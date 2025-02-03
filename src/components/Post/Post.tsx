import React, { useState } from "react";
import styles from './styles.module.css'
import { Avatar } from "../Avatar/Avatar";
import { Comments } from "../Comments/Comments";



//instalar o date-fns para formatar datas
import {format, formatDistanceToNow} from "date-fns"
import { ptBR } from "date-fns/locale";
import { log } from "console";

//mainHeader {avatar URL = "", name="", role=""}
//publishedAt = date
//content=""

//state = variáveis que eu quero que o componente monitore, ou seja, sempre que for criar uma variável (como commments) e que eu quero que quando o valor da variável de comentários mude (adicionando, removendo, etc), eu crio um state



export function Post ({author, publishedAt, content}, event: React.FormEvent<HTMLFormElement>){ //depois do passos no app.jtsx, posso usar as propriedades

    //formata as datas              //esse formato tem na documentacao do date-fsn
    const publishedDateFormatted = format(publishedAt, "dd 'de' LLLL 'às' HH:mm'h'", {locale: ptBR,}) 
    const pubilshedDateToNow = formatDistanceToNow(publishedAt, {
        locale: ptBR,
        addSuffix: true
    })

    //cria o state de comentários e o state para armazenar novos comentários, vou percorrer ele lá no final
    const [comments, setComments] = useState([
        ])

    //função de criar um novo comentario, passo a tipagem do formulário para poder usar as propriedades
    function handleCreateNewComment(event: React.FormEvent<HTMLFormElement>) {

        //constante onde recebo o comentário digitado no textarea
        const newCommentText = (event.target as HTMLFormElement).input.value

        //se o campo do textarea estiver vazio, nao retorne nada
        if (newCommentText.trim() !== "") {
            setComments([...comments, newCommentText]);    
        }
        //esse ...comments é o spread operator, ele pega todas as informações que tenho no array acima e passo o comentário atual para ser armazenado dentro do setComments

        //previne o comportamento
        event?.preventDefault()
    }

    //função de deletar o comentário
    function deleteComment(commentToDelete){ //passo o comentário que quero deletar como argumento para a funcao, o nome pode se o que eu quiser

        //constante que armazena o novo array sem o comentario, nela eu uso o metodo filter que cria um novo array que retorna as minha condicoes, nesse caso, todos os comentarios diferentes de commentToDelete (comentário que quero deletar)
        const commentsWithoutDeletedOne = comments.filter(comment =>{
            return comment !== commentToDelete
        })
        //atualiza o estado com a constante sem o comentário deletado
        setComments(commentsWithoutDeletedOne)
    }

    return (
        <div className={styles.container}>
            <header className={styles.mainHeader}>
                <Avatar 
                hasBorder={true} 
                src={author.avatarUrl}/>

                <div>
                    <h2>{author.name}</h2>
                    <p>{author.role}</p>
                </div>

                <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>{pubilshedDateToNow}</time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if (line.type === 'paragraph') {
                        return <p key={line.content}>{line.content}</p>
                    } else {
                        return <p key={line.content}><a href="#">{line.content}</a></p>
                    }
                })}
            </div>
            <form onSubmit={handleCreateNewComment}>
                <div className={styles.divider}></div>

                <footer className={styles.footer}>
                    <p>Deixe seu feedback</p>

                    <textarea name="input" placeholder="Escreva o que achou desta publicação"></textarea>

                    <div className={styles.hiddenButton}>
                        <button type="submit">Publicar</button>
                    </div>
                </footer>

                <div className="comments">
                    {comments.map((comment, index) => { //map percorre o array comments, para cada comentário dentro do array, ele retorna o component comment com seu conteúdo (nesse caso, uma string), esse comment pode ser o nome que eu quiser
                    return (<Comments 
                        key={index} 
                        content={comment} 
                        onDeleteComment={deleteComment}
                        publishedAt={publishedAt}/>)
                    })}
                </div>
           </form>
            
        </div>
    )
}