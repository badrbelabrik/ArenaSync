import React, { useEffect, useState } from "react";

export function RegistrationForm({onClose}){
    const [formData, setFormData] = useState({name:"", team:"", level:""})
    const [errors, setErrors] = useState({})

    function handleChange(e){
        const {name,value} = e.target
        setFormData(prev => ({
            ...prev,
            [name]:value
        }))
    }

    function validateForm(){
        const newErrors = {}
    }

    return(
        <div className="form">
            
            <div className="form-content">
                <button className="form-close" onClick={onClose}>×</button>
                <p className="form-content-title">Registration Form</p>
                <label htmlFor="name">Name :</label>
                <input onChange={(event)=> handleChange(event)} id="name" name="name" value={formData.name} type="text" placeholder="name"/>
                <label htmlFor="team">Team :</label>
                <input onChange={(event)=> handleChange(event)} id="team" name="team" value={formData.team} type="text" placeholder="team"/>
                <label htmlFor="level">Level :</label>
                <select onChange={(event)=> handleChange(event)} name="level" value={formData.level}  id="level">
                    <option value="" disabled defaultValue hidden>-- Select your level --</option>
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