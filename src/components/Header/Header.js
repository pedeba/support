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
                                <Link style={{display: 'inline-block', color: 'white', fontSize: 20, fontFamily: 'monospace', fontWeight: 'bold', marginLeft: 30}} to="/home/A"><li>Meus Tickets</li></Link>
                                <Link style={{display: 'inline-block', color: 'white', fontSize: 20, fontFamily: 'monospace', fontWeight: 'bold', marginLeft: 30}} to="/"><li>Sair</li></Link>
                            </>
                            :
                            <>
                                <Link to="/ticket/create" style={{display: 'inline-block', color: 'white', fontSize: 20, fontFamily: 'monospace', fontWeight: 'bold', marginLeft: 30}}><li>Criar Ticket</li></Link>
                                <Link to="/home/C" style={{display: 'inline-block', color: 'white', fontSize: 20, fontFamily: 'monospace', fontWeight: 'bold', marginLeft: 30}}>Meus Tickets</Link>
                                <Link to="/" style={{display: 'inline-block', color: 'white', fontSize: 20, fontFamily: 'monospace', fontWeight: 'bold', marginLeft: 30}}><li>Sair</li></Link>
                            </>
                        }
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Header
