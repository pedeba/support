import React from "react";
import styles from './Header.module.css'
import {Link} from "react-router-dom";
const Header = ({type}) => {
    return(
        <div className={styles.menu}>
            <div className={styles.container}>
                <h2 className={styles.title}>NOME DO SISTEMA</h2>
                <nav className={styles.nav}>
                    <ul>
                        {type === 'att'?
                            <>
                                <li>Meus Tickets</li>
                                <li>Sair</li>
                            </>
                            :
                            <>
                                <li>Criar Ticket</li>
                                <li>Meus Tickets</li>
                                <li>Sair</li>
                            </>
                        }
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header
