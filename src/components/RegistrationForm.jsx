import React from "react";

export function RegistrationForm({onClose}){
    return(
        <div className="form">
            
            <div className="form-content">
                <button className="form-close" onClick={onClose}>×</button>
                <p className="form-content-title">Registration Form</p>
                <label htmlFor="">Name :</label>
                <input type="text" placeholder="name"/>
                <label htmlFor="">Team :</label>
                <input type="text" placeholder="team"/>
                <label htmlFor="">Level :</label>
                <select name="level" id="">
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                    <option value="elite">Elite</option>
                </select>
                <button className="form-content-btn">Subscribe</button>
            </div>
        </div>
    )
}