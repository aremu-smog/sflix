import React,{useContext} from 'react'
import {UserContext} from'../Contexts/UserContext'

const Header = () =>{

    const [user] = useContext(UserContext);

    return(
        <header className="dashboard-header">
            <h1>Welcome back, {user["fullname"]}</h1>
                
        </header>
    )
}

export default Header