import React from "react"

    
export default function Header() {
    return (
    <div className="header-container">
        <img src="./assets/myphoto.jpg" className="header-pic" width="320px" />
            <div className="header">
            <h1 className="name">Gloria Bradford</h1>
            <h4 className="job-title">Frontend Developer</h4>
            <p className="header-p">gbwebsite.net</p>
            <div className="btn-container">
                <a className="btn email-btn">✉ Email</a>
                <a className="btn linkedin-btn"><i className='fa fa-linkedin-square' color='white' ></i> LinkedIn</a>
             </div>
        </div>
             
    
    </div>
    )
}


