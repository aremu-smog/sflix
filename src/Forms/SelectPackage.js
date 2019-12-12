import React,{useState, useContext} from 'react'
import {Link, Redirect} from 'react-router-dom'
import {UserContext} from '../Contexts/UserContext'
import axios from 'axios'





const SelectPackage = (props) =>{

    
    const [signup, setSignup] = props.value
    const [user, setUser] = useContext(UserContext)
    const [isLoading, setIsLoading] = useState({status : false})


    
    const choosePackage = (option) => {

        // axios.get('https://jsonplaceholder.typicode.com/users/1')
        // .then(response => console.log(response))
        // .catch(response => alert("Something worng"))

        // axios.post('https://jsonplaceholder.typicode.com/users',{user})
        // .then(response => console.log(response))
        // .catch(response => alert("Something worng"))

        setUser( prevState => {
            return (
                {...prevState, subscription : {
                    package : option
                } }
            )
        })
        setSignup({
            step : signup.step + 1
        })


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

                                <button onClick={() => choosePackage("Standard")}>CHOOSE</button>

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

                                <button onClick={() => choosePackage("Premium")}>CHOOSE</button>

                            </article>
                            
                        </div>
                    </div>
            
                
        )

    }
    
}

export default SelectPackage