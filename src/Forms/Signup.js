import React,{useState, useContext} from 'react'
// import {Link, Redirect} from 'react-router-dom'
// import {UserContext} from '../Contexts/UserContext'
// import axios from 'axios'
import BasicInfo from './BasicInfo'
import SelectPackage from './SelectPackage'





const Signup = () =>{

    const [signup, setSignup] = useState({
        step : 1
    })

    if(signup.step === 1){
        return(<BasicInfo value={[signup, setSignup]} />)
    }else if(signup.step === 2){
        return(<SelectPackage value={[signup, setSignup]} />)
    }
    
}

export default Signup