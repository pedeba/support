import React, {useEffect, useState} from "react";
import Header from "../Header/Header";
import Table from "../Table/Table";
import styles from './HomeCustomer.module.css'
import {GET_TICKETS} from "../../api";
import axios from "axios";
import Button from "../Form/Button";
import {useNavigate} from "react-router-dom";
const HomeCustomer = ({data}) => {
    const [tickets, setTickets] = useState([])
    const [openTickets, setOpenTickets] = useState([])
    const [closedTickets, setClosedTickets] = useState([])
    const navigate = useNavigate()
    useEffect(()=> {
        const getTickets = async () => {
            const {url, headers} = GET_TICKETS(data.usuario.id)
            const response = await axios.get(url, headers)
            const tickets = response.data
            const open = tickets.filter(item=>item.status === 'A')
            const closed = tickets.filter(item=>item.status === 'F')
            setTickets(tickets)
            setClosedTickets(closed)
            setOpenTickets(open)
        }
        getTickets()
    },[data.usuario.id])
    return (
        <>
            <Header type="cust"/>
            <section className={styles.container}>
                <div className={styles.menu}>
                    <div className={styles.info}>
                        <p>Abertos({openTickets.length})</p>
                        <p>Fechados({closedTickets.length})</p>
                    </div>
                    <Button style={{float: 'right', marginBottom: 40}} style={{display: 'inline-block', float: 'right', marginBottom: 40}} onClick={()=>navigate('/ticket/create')}>Criar Ticket</Button>
                </div>
                <Table tickets={tickets}/>
            </section>
        </>
    )
}

export default HomeCustomer
