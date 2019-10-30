import React,{useContext} from 'react'
import {Redirect, Link, BrowserRouter as Router} from 'react-router-dom'
import {WatchlistContext} from './Contexts/WatchlistContext'
import {UserContext} from './Contexts/UserContext'

const Navbar = () =>{
    const [user] = useContext(UserContext)
    const [watchlist] = useContext(WatchlistContext)

    if( user.isLoggedIn ){
        return(
            <Redirect to="/dashboard" />
        )
    }else{
        return(
            <nav className="navbar">
                
                <div className="logo">
                    <Link to="/"><img src={"img/sflix.png"} alt="Logo" width="100px" /></Link>
                </div>
                    
                    <div className="account-info">
                    
                    WATCHLIST
                    <span className="watchlist"><span>{watchlist.length}</span></span>
                    <Link to="/signin"><button>Log in Now</button></Link>
                    </div>
    
            </nav>
        )

    }
    
}

export default Navbar