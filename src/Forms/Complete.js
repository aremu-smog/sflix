import React,{useState, useContext} from 'react'
import {Link, Redirect} from 'react-router-dom'
import {UserContext} from '../Contexts/UserContext'
import axios from 'axios'





const Complete = (props) =>{

    
    const [user, setUser] = useContext(UserContext)


    if(user.isLoggedIn){
        return( <Redirect to="/dashboard" />)
    }else{

        return(
            
            <div className="inner" style={{textAlign:"center",padding:"4em 0em 6em 0em"}}>
                <img src="img/form/success.png" alt="Success Icon" width="120px" />
            <h3 style={{marginTop:"2em"}}>Welcome, Aremu</h3>
                <footer><Link to="/signin">Log into your dashboard</Link></footer>
            </div>

                
        )

    }
    
}

export default Complete