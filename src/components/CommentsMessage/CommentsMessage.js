import React from 'react'
import styles from './CommentsMessage.module.css'
import {DELETE_COMMENT, DELETE_TICKET} from "../../api";
import axios from "axios";
const CommentsMessage = ({comments, data, getTickets}) => {
    const excludeComment = async (id) => {
        const {url,headers} = DELETE_COMMENT(id)
        await axios.delete(url, headers)
        getTickets()
    }
    return (
        <div>
            {comments.map(item=>(
                <div className={`${styles.comment}`} key={item.id}>
                    <div className={`${styles.text}`}>
                        <p className={styles.name}>{item.usuario.nome}</p>
                        <p style={{color: '#000', width: 900}} className={styles.message}>{item.mensagem}</p>
                    </div>
                    {data.usuario.id === item.usuario.id?<button onClick={()=>excludeComment(item.id)} className={`${styles.button}`}>Excluir</button>:''}
                </div>
            ))}
        </div>
    )
}

export default CommentsMessage
