import React,{useState, useContext} from 'react'
import {Link, Redirect} from 'react-router-dom'
import {UserContext} from '../Contexts/UserContext'
import Loader from './Loader'
import axios from 'axios'





const BasicInfo = (props) =>{

    
    const [signup, setSignup] = props.value
    const [user, setUser] = useContext(UserContext)

    const [email, setEmail] = useState({value : ""})
    const [fullname, setFullname] = useState({value : ""})
    const [password, setPassword] = useState({value : ""})
    const [userName, setUserName] = useState({value: ""})
    const [isLoading, setIsLoading] = useState({status : true})

    

    const handleMail = (e) => {
        setEmail({ value : e.target.value })
    }

    const handleFullname = (e) => {
        setFullname({ value: e.target.value })
    }

    const handleUsername = (e) => {
        setUserName({ value : e.target.value  })
    }

    const handlePassword = (e) => {
        setPassword({ value : e.target.value })
    }
    const handleSignIn = (e) => {

        setIsLoading({
            status: true
        })

        // setSignup({
        //     step : signup.step + 1
        // })

        // alert("Ready to sign in")
        // axios.get("https://jsonplaceholder.typicode.com/users")
        // .then(res => {
        //     const users = res.data

        //     const theUser = users.filter( user => {
        //         return(
        //             user.email === formMail.value
        //         )
        //     })

        //     if(theUser.length === 0){
        //         alert("No user found")
        //     }else{
        //         if(formMail.value === users[0].email && formPassword.value === users[0].username){
        //             alert("User can now login")
    
        //         setUser({
        //             isLoggedIn : true
        //         })
    
        //     }else{
        //         alert("Ogbeni, kamdan")
        //     }
               
        //     }

             
        // })
        // .catch(error =>   alert("Couldn't load resource") )
    
        
        // e.preventDefault()

    }


    if(user.isLoggedIn){
        return( <Redirect to="/dashboard" />)
    }else{

        return(
            
                    <div >
                    <h3>Basic Information</h3>
                        <form onSubmit={handleSignIn}>
                            <input type="email" onChange={handleMail} placeholder="Your email address" />
                            <input type="text" onChange={handleFullname} placeholder="Your Fullname" />
                            <input type="text" onChange={handleUsername} placeholder="Your Username" />
                            <input type="password" onChange={handlePassword} placeholder="Your password" />
                            <button>{ isLoading.status === false ? "CONTINUE" : <Loader />}</button>
                        </form>
                        <footer>Already have an account ? <Link to="/signin">Sign in here</Link></footer>
                    </div>
                
        )

    }
    
}

export default BasicInfo