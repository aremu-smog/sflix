import React from 'react'
import {Link} from 'react-router-dom'

const Header = () =>{
    return(
        <header className="main-header">
            <h1>UNLIMITED ENTERTAINMENT <br/>JUST FOR YOU</h1>
            <Link to="/signup"><button>Get Started Now</button></Link>
            <div class="landing-carousel">
                <img src="img/posters/1.jpg" alt="" class="item" height="300px"/>
                <img src="img/posters/2.jpg" alt="" class="item" height="300px"/>
                <img src="img/posters/3.jpg" alt="" class="item" height="300px"/>
                <img src="img/posters/4.jpg" alt="" class="item" height="300px"/>
                <img src="img/posters/7.jpg" alt="" class="item" height="300px"/>
                <img src="img/posters/2.jpg" alt="" class="item" height="300px"/>
                <img src="img/posters/8.jpg" alt="" class="item" height="300px"/>
                <img src="img/posters/7.jpg" alt="" class="item" height="300px"/>             
            </div>
        </header>
    )
}

export default Header