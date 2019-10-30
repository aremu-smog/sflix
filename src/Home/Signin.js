import React,{useState, useContext} from 'react'
import {Link, Redirect} from 'react-router-dom'
import {UserContext} from '../Contexts/UserContext'
import axios from 'axios'





const Signin = () =>{

    

    const [user, setUser] = useContext(UserContext)

    const [formMail, setFormMail] = useState({value : ""})
    const [formPassword, setFormPassword] = useState({value : ""})


    const handleMail = (e) => {
        setFormMail({
            value : e.target.value
        })
    }
    const handlePassword = (e) => {
        setFormPassword({
            value : e.target.value
        })
    }
    const handleSignIn = (e) => {

        alert("Ready to sign in")
        axios.get("https://jsonplaceholder.typicode.com/users")
        .then(res => {
            const users = res.data

            const theUser = users.filter( user => {
                return(
                    user.email == formMail.value
                )
            })

            if(theUser.length == 0){
                alert("No user found")
            }else{
                alert( theUser[0].name )
            }

            // if(formMail.value === users[0].email && formPassword.value === users[0].username){
            //     alert("User can now login")

            // setUser({
            //     isLoggedIn : true
            // })

        // }else{
        //     alert("Ogbeni, kamdan")
        // }
            
        })
    
        
        e.preventDefault()

        // if(formMail.value === user.email && formPassword.value === user.password){

        //     // setUser({
        //     //     isLoggedIn : true
        //     // })

        // }else{
        //     alert("Ogbeni, kamdan")
        // }
    }


    if(user.isLoggedIn){
        return( <Redirect to="/dashboard" />)
    }else{

        return(
            <div className="login-area">
                <div className="wrapper">
                    <div className="logo"><img src="img/sflix.png" width="120px" /></div>
                    <div className="inner">
                    <h3>Sign in</h3>
                        <form onSubmit={handleSignIn}>
                            <input type="text" onChange={handleMail} placeholder="Your email address" />
                            <input type="password" onChange={handlePassword} placeholder="Your password" />
                            <button>Sign In</button>
                        </form>
                        <footer>Don't have an account yet ? <Link to="/">Go to home</Link></footer>
                    </div>
                </div>
            </div>
                
        )

    }
    
}

export default Signin