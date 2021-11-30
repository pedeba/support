import React from "react";
import styles from './Login.module.css'
import {Route, Routes} from "react-router-dom";
import LoginForm from "./LoginForm";
function Login () {
    return (
        <section className={styles.login}>
            <div className={styles.forms}>
                <Routes>
                    <Route path='/' element={<LoginForm/>}/>
                </Routes>
            </div>
        </section>
    )
}
export default Login
