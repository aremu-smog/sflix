import React from 'react'
import {UserProvider} from './Contexts/UserContext'
import Header from './Dashboard/Header'
import Movies from './Home/Movies'
import Navbar from './Dashboard/Navbar';

const Dashboard = () =>{
    return(
        <div>
            <UserProvider>
                <Navbar />
                <Header />
                <Movies />
            </UserProvider>

        </div>
    )
}

export default Dashboard