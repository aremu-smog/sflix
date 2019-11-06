import React,{useContext} from 'react'
import {Redirect, Link} from 'react-router-dom'
import {WatchlistContext} from '../Contexts/WatchlistContext'
import {UserContext} from '../Contexts/UserContext'

const Navbar = () =>{
    const [user] = useContext(UserContext)
    const [watchlist] = useContext(WatchlistContext)

    if( !user.isLoggedIn ){

            return(
                <nav className="navbar">
                    
                    <div className="logo">
                        <Link to="/"><img src={"img/sflix.png"} alt="Logo" width="100px" /></Link>
                    </div>
                        
                        <div className="account-info">
                        
                        WATCHLIST
                        <span className="watchlist"><span>{watchlist.length}</span></span>
                        <Link to="/home"><button>Sign out of your Account</button></Link>
                        </div>
        
                </nav>
            )

    }else{

        return(<Redirect to="/" />)
       
    }
    
}

export default Navbar