import React from "react"
import Checkbox from '@mui/material/Checkbox';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import "./Signin.css"
import MainImg from "../../Images/Main_Sign_In.jpg"
import logo from "../../Images/digiPROMV2.png"


export default function Signin(){

    const [formValues, setFormValues] = React.useState({});
    const [formErrors, setFormErrors] = React.useState({});

      const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormValues(values => ({...values, [name]: value}))
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues));
        // setIsSubmit(true);
        console.log(formValues);
    }

    const validate = (values) => {
        const errors = {};
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i; //regex for email 

        if (!regexEmail.test(values.txtEmail)) {
            errors.txtEmail = "Please provide a valid email address";
        }
        
        return errors;
    }   

    return(
        <div className="signin-container">
            <div className="image-section">
                <div className="logo-container">
                    <img src={logo} className="logo"></img>
                </div>
                <img src={MainImg} className="MainImage"></img>
            </div>
            
            <div className="signin-section">
                 <form onSubmit={handleSubmit}>
                <div className="form-box">
                    <h3>Forgot your password?</h3>
                    <h6>Please enter the email address associated with your account, <br></br>We will
                     email you a link to reset your password.</h6>
                    <label>Email address</label>
                    <input type="text" placeholder="Enter your email address" name="txtEmail" className="FieldsStyle" required maxLength={25} onChange={handleChange}></input>
                    <p className="ErrorMessage">{formErrors.txtEmail}</p>
                    <div><a href="#">Back to sign in</a></div>
                </div>
                
                <button className="ButtonStyle" role="button">Reset Password</button>
                
                </form>
            </div>
        </div>
    )
}