import React from "react";
import styles from './Header.module.css'
import {Link} from "react-router-dom";
const Header = () => {
    return(
        <div className={styles.menu}>
            <div className={styles.container}>
                <h2 className={styles.title}>NOME DO SISTEMA</h2>
                <nav className={styles.nav}>
                    <ul>
                        <li>Criar Ticket</li>
                        <li>Meus Ticketss</li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header
