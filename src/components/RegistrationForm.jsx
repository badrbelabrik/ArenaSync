import React, { useEffect, useState } from "react";

export function RegistrationForm({tournaments,tournament,handleSubscribe,onClose}){
    const [formData, setFormData] = useState({name:"", team:"", level:""})
    const [errors, setErrors] = useState({})
    const isFormEmpty = !formData.name.trim() || !formData.team.trim() || !formData.level

    function handleChange(e){
        const {name,value} = e.target
        setFormData(prev => ({
            ...prev,
            [name]:value
        }))
    }


    function validateForm(onClose){
        const newErrors = {}

        const nameRegex = /^[A-Za-z\s]{3,}$/
        const teamRegex = /^[A-Za-z0-9\s]{2,}$/

        if(!formData.name.trim()){
            newErrors.name = "Name is required"
        } else if(!nameRegex.test(formData.name)){
            newErrors.name= "Name must contain only letters and at least 3 characters"
        }
        
        if(!formData.team.trim()){
            newErrors.team = "Team is required"
        } else if(!nameRegex.test(formData.team)){
            newErrors.team = "Team must contain at least 2 valid characters"
        }
        
        if(!formData.level){
            newErrors.level = "Please select a level"
        }
        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    function handleSubmit(e,onClose){
        e.preventDefault()
        const isValid = validateForm()

        if(!isValid) {
            console.log('Form submitted', tournaments)
            return
        }

        handleSubscribe(tournament.id,true,formData)
        onclose
    }

    return(
        <form className="form" onSubmit={(event)=>handleSubmit(event,onClose)}>
            
            <div className="form-content">
                <button className="form-close" onClick={onClose}>×</button>
                <p className="form-content-title">Registration Form</p>
                <label htmlFor="name">Name :</label>
                <input onChange={(event)=> handleChange(event)} id="name" name="name" value={formData.name} type="text" placeholder="name"/>
                {errors.name && <span className="form-error">{errors.name}</span>}
                <label htmlFor="team">Team :</label>
                <input onChange={(event)=> handleChange(event)} id="team" name="team" value={formData.team} type="text" placeholder="team"/>
                {errors.team && <span className="form-error">{errors.team}</span>}
                <label htmlFor="level">Level :</label>
                <select onChange={(event)=> handleChange(event)} name="level" value={formData.level}  id="level">
                    <option value="" disabled defaultValue hidden>-- Select your level --</option>
                    <option value="beginner">Beginner</option>
                    <option value="intermediate">Intermediate</option>
                    <option value="advanced">Advanced</option>
                    <option value="elite">Elite</option>
                </select>
                {errors.level && <span className="form-error">{errors.level}</span>}
                <button className="form-content-btn" type="submit" disabled={isFormEmpty}>Subscribe</button>
            </div>
        </form>
    )
}