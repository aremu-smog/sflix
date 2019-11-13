import React,{useState, useContext} from 'react'
import {Link, Redirect} from 'react-router-dom'
import {UserContext} from '../Contexts/UserContext'
import Loader from './Loader'
import axios from 'axios'
import MD5 from 'crypto-js/md5'





const BasicInfo = (props) =>{

    
    const [signup, setSignup] = props.value
    const [user, setUser] = useContext(UserContext)

    const [email, setEmail] = useState({value : "", error : false})
    const [fullname, setFullname] = useState({value : "", error : false})
    const [password, setPassword] = useState({value : "", error : false})
    const [userName, setUserName] = useState({value: "", error : false})
    const [isLoading, setIsLoading] = useState({status : false})

    

    const handleMail = (e) => {
        setEmail({ value : e.target.value.toLowerCase() })
    }

    const handleFullname = (e) => {
        setFullname({ value: e.target.value })
    }

    const handleUsername = (e) => {
        setUserName({ value : e.target.value  })
    }

    const handlePassword = (e) => {
        setPassword({ value : MD5(e.target.value) })
    }




    const handleSignIn = (e) => {

        setIsLoading({
            status: true
        })
        
        let errors = []
        if(email.value === "" || fullname.value === "" || password.value === "" || userName.value === ""){

            errors.push("No field can be empty")
            if(email.value === ""){
                setEmail({error: true})
            }else{

                axios.get("https://my-json-server.typicode.com/aremu-smog/JP/users")
                    .then(res => {
                        const users = res.data

                        const theUser = users.filter( user => {
                            return(
                                user.email === email.value
                            )
                        })

                        if(theUser.length === 0){
                            return null
                        }else{
                            setEmail({ error : true })
                            setIsLoading({status : false})
                        
                        }

                        
                    })
                    .catch(error =>   {
                        setEmail({ error : true })
                        errors.push("Couldn't confirm email")
                        setIsLoading({ status: false })
                        alert("You are offline")
                    })

            }

            if(fullname.value === ""){setFullname({error: true})}

            if(password.value === ""){setPassword({error: true})}
            if(userName.value === ""){setUserName({error: true})}
        }
        
    
        if(errors.length === 0){
            setSignup({ step : signup.step + 1 })
                setUser({
                    fullname: fullname.value,
                    email: email.value,
                    username : userName.value,
                    password: password.value
                })
        }else{
            setIsLoading({status: false})
        }
        e.preventDefault()

    }


    if(user.isLoggedIn){
        return( <Redirect to="/dashboard" />)
    }else{

        return(
            
                    <div >
                    <h3>Basic Information</h3>
                        <form onSubmit={handleSignIn}>
                            <input type="text" className={fullname.error  ? "error-input" : ""} onChange={handleFullname} placeholder="Your Fullname" />
                            <input type="email" className={email.error  ? "error-input" : ""} onChange={handleMail} placeholder="Your email address" />
                            <input type="text" className={userName.error  ? "error-input" : ""} onChange={handleUsername} placeholder="Your Username" />
                            <input type="password" className={password.error  ? "error-input" : ""} onChange={handlePassword} placeholder="Your password" />
                            <button>{ isLoading.status === false ? "CONTINUE" : <Loader />}</button>
                        </form>
                        <footer>Already have an account ? <Link to="/signin">Sign in here</Link></footer>
                    </div>
                
        )

    }
    
}

export default BasicInfo