import React,{useState, useContext} from 'react'
import {Link, Redirect} from 'react-router-dom'
import {UserContext} from '../Contexts/UserContext'
import axios from 'axios'





const PaymentOption = (props) =>{

    
    const [signup, setSignup] = props.value
    const [user, setUser] = useContext(UserContext)

    const[cardType, setCardType] = useState({value : ""})
    const [cardNumber, setCardNumber] = useState({value : ""})
    const [cardDate, setCardDate] = useState({value : ""})
    const [cardCvv, setCardCvv] = useState({value : ""})
    const [cardPin, setCardPin] = useState({value : ""})

    const isANumber = (val) =>{
        let pattern = /[0-9]/
        return pattern.test(val)
    }

    const handleCardNumber = (e) => {
        let theNumber = e.target.value

        if(isANumber(theNumber)){
            e.target.value = theNumber
            if(theNumber[0] == 5 || theNumber[0] == 4 || theNumber[0] == 3){
                setCardNumber({  value : e.target.value  })

            if(e.target.value[0] == 5){
                setCardType({
                    value : "mastercard"
                })
            }else if(e.target.value[0] == 4){
                setCardType({
                    value : "visa"
                })
            }else if(e.target.value[0] == 3){
                setCardType({
                    value : "verve"
                })
            }
            }
            else{
                setCardType({
                    value : "error"
                })
            }
        }else{
            return null
        }
    }
    const handleDate = (e) => {
        let theDate = e.target.value
        setCardDate({
            value : e.target.value
        })
        
        if(theDate.length == 2){
            if(theDate.length == cardDate["value"].length + 1){
                e.target.value = theDate + "/"
            }
        }
    }
    const handleCvv = (e) => {
        if(isANumber(e.target.value)){
            setCardCvv({
                value : e.target.value
            })
        }
    }

    const handlePin = (e) => {
        if(isANumber(e.target.value)){
            setCardPin({
                value : e.target.value
            })
        }
    }
    
    const handleSignIn = (e) => {

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
        
                    <div >
                    <h3>Payment Info.</h3>
                    <p>We won't charge you without your permission</p>

                    <div className="logos">
                        <img style={{opacity : cardType.value === "visa" ? "0.8":""}} src="img/form/visa.png" alt="visa logo" height="60px" />
                        <img style={{opacity : cardType.value === "verve" ? "0.8":""}} src="img/form/verve.png" alt="verve logo" height="60px" />
                        <img style={{opacity : cardType.value === "mastercard" ? "0.8":""}} src="img/form/mastercard.png" alt="mastercard logo" height="60px" />
                    </div>
                        <form onSubmit={handleSignIn}>
                            
                            <input 
                            type="text"
                            maxLength="16"
                            onChange={handleCardNumber}
                            className={cardType.value == "error" ?"error-input" : ""}
                            placeholder="Your Card Number" />


                            <div className="card-info">
                                <input 
                                
                                type="text" onChange={handleDate}  
                                maxlength="7" 
                                placeholder="MM/YYYY"
                                />
                                <input
                                type="password"
                                onChange={handleCvv}
                                maxLength="3"
                                placeholder="CVV" />


                                <input
                                type="password"
                                onChange={handlePin}
                                maxLength="4"
                                placeholder="PIN" />
                            </div>
                            <button>PROCEED</button>
                        </form>
                        <footer>Already have an account ? <Link to="/signin">Sign in here</Link></footer>
                    </div>
                
        )

    }
    
}

export default PaymentOption