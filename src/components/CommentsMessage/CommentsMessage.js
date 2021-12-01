import React from 'react'
import styles from './CommentsMessage.module.css'
const CommentsMessage = ({comments}) => {
    return (
        <div>
            {comments.map(item=>(
                <div className={styles.comment} key={item.id}>
                    <p className={styles.name}>{item.usuario.nome}</p>
                    <p style={{color: '#000', width: 900}} className={styles.message}>{item.mensagem}</p>
                </div>
            ))}
        </div>
    )
}

export default CommentsMessage
