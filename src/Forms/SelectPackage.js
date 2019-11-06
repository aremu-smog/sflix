import React,{useState, useContext} from 'react'
import {Link, Redirect} from 'react-router-dom'
import {UserContext} from '../Contexts/UserContext'
import axios from 'axios'





const SelectPackage = (props) =>{

    
    const [signup, setSignup] = props.value
    const [user, setUser] = useContext(UserContext)


    
    const choosePackage = (e) => {

        setSignup({
            step : signup.step + 1
        })

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
            
                    <div>
                    <h3>Select a Package</h3>
                        <div className="packages">
                            <article className="package">
                                <header>
                                    <p className="title">STANDARD</p>
                                    <h3 className="price">$150</h3>
                                </header>
                                <ul className="offers">
                                    <li>Unlimited Movies</li>
                                    <li>3 Devices</li>
                                    <li>30days Free Trial</li>
                                    <li></li>
                                </ul>

                                <button onClick={choosePackage}>CHOOSE</button>

                            </article>
                            <article className="package">
                                <header>
                                    <p className="title">PREMIUM</p>
                                    <h3 className="price">$250</h3>
                                </header>
                                <ul className="offers">
                                    <li>Unlimited Movies</li>
                                    <li>Unlimited Devices</li>
                                    <li>Unlimited Users</li>
                                    <li>30days Free Trial</li>
                                </ul>

                                <button onClick={choosePackage}>CHOOSE</button>

                            </article>
                            
                        </div>
                    </div>
            
                
        )

    }
    
}

export default SelectPackage