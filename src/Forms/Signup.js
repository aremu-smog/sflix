import React,{useState, useContext} from 'react'
import {Link, Redirect} from 'react-router-dom'
// import {UserContext} from '../Contexts/UserContext'
// import axios from 'axios'
import BasicInfo from './BasicInfo'
import SelectPackage from './SelectPackage'
import PaymentOption from './PaymentOption'
import Complete from './Complete'
import Progress from './Progress'





const Signup = () =>{

    const [signup, setSignup] = useState({
        step : 1
    })
    
    let currentStep = ""
    if(signup.step === 1){
        currentStep = <BasicInfo value={[signup, setSignup]} />
    }else if(signup.step === 2){
        currentStep = <SelectPackage value={[signup, setSignup]} />
    }else if(signup.step === 3){
        currentStep = <PaymentOption value={[signup, setSignup]} />
    }else if(signup.step === 4){
        currentStep = <Complete value={[signup, setSignup]} />
    }else{
        currentStep = <Redirect to="/" />
    }

    return(
        <div>
            <div className="login-area">
                <div className="wrapper">
                    <div className="logo"><Link to="/"><img src="img/sflix.png" alt="SFLIX logo" width="120px" /></Link></div>
                    <Progress current_step={signup.step} />
                    <div className="inner">
                    {currentStep}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Signup