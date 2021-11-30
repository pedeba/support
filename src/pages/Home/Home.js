import React from 'react'
import {UserContext} from "../../UserContext";
import {useParams} from "react-router-dom";
import HomeCustomer from "../../components/HomeCustomer/HomeCustomer";
import HomeAttendant from "../../components/HomeAttendant/HomeAttendant";
import styles from './Home.module.css'
const Home = () => {
    const {data} = React.useContext(UserContext)
    const {type} = useParams()
    return (
        <div>
            {type==='C'?<HomeCustomer data={data}/>:<HomeAttendant data={data}/>}
        </div>
    )
}

export default Home
