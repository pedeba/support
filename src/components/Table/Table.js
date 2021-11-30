import React from 'react'
import styles from './Table.module.css'
import {useNavigate} from "react-router-dom";
const Table = ({tickets}) => {
    const navigate = useNavigate()
    const handleClick = (id) => {
        navigate(`/ticket/${id}`)
    }
    return (
        <div>
            <table className={styles.table}>
                <tr>
                    <th className={styles.titulo}>Título</th>
                    <th>Status</th>
                    <th className={styles.data}>Data</th>
                </tr>
                    {tickets.map(item=>{
                        return (
                           <tr className={styles.tr} onClick={()=>handleClick(item.id)} key={item.id}>
                               <td>{item.titulo}</td>
                               <td>{item.status === 'A'?'Aberto':'Fechado'}</td>
                               <td className={styles.data}>{item.lastUpdate}</td>
                           </tr>
                        )
                    })}
            </table>
        </div>
    )
}

export default Table
