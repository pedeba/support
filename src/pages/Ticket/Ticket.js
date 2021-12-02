import React, {useEffect, useState} from 'react'
import Header from "../../components/Header/Header";
import {useNavigate, useParams} from "react-router-dom";
import {DELETE_TICKET, GET_TICKETS, GET_TICKETSA, UPDATE_TICKET} from "../../api";
import axios from "axios";
import styles from './Ticket.module.css'
import Comments from "../../components/Comments/Comments";
import {UserContext} from "../../UserContext";
const Ticket = () => {
    const navigate = useNavigate()
    const [ticket, setTicket] = useState({})
    const [newTitle, setNewTitle] = useState(ticket.titulo)
    const [newDescription, setNewDescription] = useState(ticket.descricao)
    const [newStatus, setNewStatus] = useState(ticket.descricao)
    const {id} = useParams()
    const {data} = React.useContext(UserContext)
    useEffect(()=>{
        const getTicket = async () => {
            if (data.usuario.tipo !== 'A') {
                const {url, headers} = GET_TICKETS(data.usuario.id)
                const response = await axios.get(url, headers)
                const tickets = response.data
                const ticket = tickets.filter(item=>item.id === Number(id))
                setNewTitle(ticket[0].titulo)
                setNewStatus(ticket[0].status)
                setNewDescription(ticket[0].descricao)
                setTicket(ticket[0])
            } else {
                const {url, headers} = GET_TICKETSA(id)
                const response = await axios.get(url, headers)
                const ticket = response.data
                setNewTitle(ticket.titulo)
                setNewStatus(ticket.status)
                setNewDescription(ticket.descricao)
                setTicket(ticket)
            }
        }
        getTicket()
    },[id, data.usuario.id])
    const updateTicket = async (status) => {
        const {url, headers, body} = UPDATE_TICKET(id, {
            id: id,
            titulo: newTitle,
            descricao: newDescription,
            id_usuario: data.usuario.id,
            lastUpdate: ticket.lastUpdate,
            status: status
        })
        const response = await axios.put(url, body, headers)
        console.log(response.data)
    }
    const deleteTicket = async () => {
        if(window.confirm('Deseja excluir este ticket?')){
            const {url, headers} = DELETE_TICKET(id)
            await axios.delete(url, headers)
            navigate('/home/C')
        }
    }
    return (
        <>
            <Header/>
            <section className={styles.container}>
                <div className={styles.edit}>
                    <select className={styles.selectStatus} onSelect={()=>updateTicket()} onChange={({target})=>updateTicket(target.value)}>
                        <option value={ticket.status} selected>{ticket.status === 'A'?'Aberto':'Fechado'}</option>
                        <option value={ticket.status === 'A'?'F':'A'}>{ticket.status === 'A'?'Fechado':'Aberto'}</option>
                    </select>
                    <button onClick={()=>deleteTicket()} className={styles.button}>Excluir</button>
                </div>
                <input onBlur={()=>updateTicket()} className={styles.inputTitle} value={newTitle} onChange={({target})=>setNewTitle(target.value)}/>
                <p className={styles.descriptionp}>Descrição:</p>
                <textarea className={styles.description} value={newDescription} onBlur={()=>updateTicket()} onChange={({target})=>setNewDescription(target.value)}></textarea>
            </section>
            <Comments id={id} data={data}/>
        </>
    )
}

export default Ticket
