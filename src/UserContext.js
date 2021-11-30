import React from 'react'
import {USER_POST} from './api'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
export const UserContext = React.createContext()

export const UserStorage = ({children}) => {
    const [data, setData] = React.useState(null)
    const [login, setLogin] = React.useState(false)
    const [loading, setLoaging] = React.useState(false)
    const navigate = useNavigate()


    async function getUser(url,headers, body){
        const response = await axios.post(url, body, headers)
        const json =  response.data
        console.log('json',json)
        setData(json)
        setLogin(true)
        return json.usuario.tipo
    }



    async function userLogin(email, password){
        try{
            setLoaging(true)
            const {url, headers, body} = USER_POST({email: email, senha: password})
            const type = await getUser(url,headers, body)
            console.log('type', type)
            navigate(`/home/${type}`)
        } catch(err){
            setLogin(false)
        } finally {
            setLoaging(false)
        }
    }

    return (
        <UserContext.Provider value={{userLogin, data,loading, login}}>
            {children}
        </UserContext.Provider>
    )
}

