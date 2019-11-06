import React from 'react'


const Progress = ({current_step}) =>{
    let progress_status = ""
    if(current_step == 1){
        progress_status = "15%"
        
    }else if(current_step == 2){
        progress_status = "50%"
    }else if(current_step == 3){
        progress_status = "86%"
    }else if(current_step == 4){
        progress_status = "100%"
    }
    
    return(
        <div class="progress-wrapper">
            <div className="progress">
                <div className="progress-inner" style={{width : progress_status}}></div>
                <div className="steps">
                    <span className={current_step >= 1 ? "active-step " : "" }></span>
                    <span className={current_step >= 2 ? "active-step " : ""  }></span>
                    <span className={current_step >= 3 ? "active-step " : "" }></span>
                </div>
            </div>
        </div>
    )
}

export default Progress