import React, {useState} from 'react'
import Header from "../../components/Header/Header";
import styles from './TicketCreate.module.css'
import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import {CREATE_TICKET} from "../../api";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import {UserContext} from "../../UserContext";

const TicketCrerate = () => {
    const navigate = useNavigate()
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const {data} = React.useContext(UserContext)
    const createTicket = async (event) => {
        event.preventDefault()
        if (title && description) {
            const {url, headers, body} = CREATE_TICKET({id_usuario: data.usuario.id, titulo: title, status: 'A',descricao: description})
            const request = await axios.post(url, body, headers)
            if (request.data) {
                navigate('/home/C')
            }
        }
    }
    return (
        <>
            <Header/>
            <section className={styles.container}>
                <h1 className={styles.h1}>CRIAR TICKET</h1>
                <form onSubmit={createTicket}>
                    <Input value={title} onChange={({target})=>setTitle(target.value)} label='Título'/>
                    <label className={styles.label}>Descrição</label>
                    <textarea className={styles.description} value={description} onChange={({target})=>setDescription(target.value)}></textarea>
                    <Button style={{margin: 'auto'}}>Criar Ticket</Button>
                </form>
            </section>
        </>
    )
}

export default TicketCrerate
