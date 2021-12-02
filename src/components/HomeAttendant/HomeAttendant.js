import React, {useState} from "react";
import Header from "../Header/Header";
import {GET_TICKETS_ALL} from "../../api";
import axios from "axios";
import {useEffect} from "react";
import Table from "../Table/Table";
import styles from './HomeAttendant.module.css'

const HomeAttendant = ({att}) => {
    const [tickets, setTickets] = useState([])
    const [openTickets, setOpenTickets] = useState([])
    const [closedTickets, setClosedTickets] = useState([])
    useEffect(()=> {
        const getTickets = async () => {
            const {url, headers} = GET_TICKETS_ALL()
            const response = await axios.get(url, headers)
            const tickets = response.data
            const open = tickets.filter(item=>item.status === 'A')
            const closed = tickets.filter(item=>item.status === 'F')
            setTickets(tickets)
            setClosedTickets(closed)
            setOpenTickets(open)
        }
        getTickets()
    },[])
    return (
        <>
            <Header type='att'/>
            <section className={styles.container}>
                <div className={styles.info}>
                    <p>Abertos({openTickets.length})</p>
                    <p>Fechados({closedTickets.length})</p>
                </div>
                <Table tickets={tickets}/>
            </section>
        </>
    )
}

export default HomeAttendant
