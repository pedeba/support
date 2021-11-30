import React, {useState} from "react";
import styles from './LoginForm.module.css'
import Input from "../../components/Form/Input";
import Button from "../../components/Form/Button";
import {UserContext} from '../../UserContext'
function LoginForm () {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const {userLogin, loading} = React.useContext(UserContext)

    const handleSubmit = async (event) => {
        event.preventDefault()
        if (password &&  email) {
            userLogin(email,password)
        }
    }
    return (
        <section className='animeLeft'>
            <div className={styles.header}>
                <h1 className='satitle'>NOME DO SISTEMA</h1>
                <p>Sistema de Tickets</p>
            </div>
            <h1 className='title'>Login</h1>
            <form onSubmit={handleSubmit}>
                <Input name='email' value={email} label='Usuário' type='text' onChange={({target})=>setEmail(target.value)}/>
                <Input name='password' value={password} label='Senha' type='text' onChange={({target})=>setPassword(target.value)}/>
                {loading?<Button disabled >Entrando...</Button>:<Button>Entrar</Button>}
            </form>
        </section>
    )
}

export default LoginForm
