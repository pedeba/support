import React, {useContext, useEffect, useState} from 'react'
import styles from './Comments.module.css'
import {GET_COMMENTS, POST_COMMENT} from "../../api";
import CommentsMessage from "../CommentsMessage/CommentsMessage";
import axios from "axios";
import {UserContext} from "../../UserContext";
const Comments = ({id}) => {
    const [newComment, setNewComment] = useState('')
    const [comments, setComments] = useState([])
    const {data} = useContext(UserContext)
    const getTickets = async () => {
        const {url, headers} = GET_COMMENTS(id)
        const request = await axios.get(url,headers)
        setComments(request.data)
    }
    useEffect(()=>{
        getTickets()
    },[id])
    const postComment = async ()=> {
        if (newComment !== '') {
            const {url, body, headers} = POST_COMMENT({
                id_ticket: id,
                usuario: {id: data.usuario.id},
                mensagem: newComment
            })
            const request = await axios.post(url, body, headers)
            setNewComment('')
            getTickets()
        } else {
            alert('Informe um comentário')
        }
    }
    return (
        <section className={styles.container}>
            <div className={styles.comments}>
                <p className={styles.commentsp}>Comentários:</p>
                <div style={{marginBottom: 40}}>
                    <textarea placeholder="Deixe seu comentário..." className={styles.comment} value={newComment} onChange={({target})=>setNewComment(target.value)}></textarea>
                    <button onClick={()=>postComment()} className={styles.button}>Enviar</button>
                </div>
                {comments.length? <CommentsMessage comments={comments}/> : 'Sem comentários.'}
            </div>
        </section>
    )
}

export default Comments
