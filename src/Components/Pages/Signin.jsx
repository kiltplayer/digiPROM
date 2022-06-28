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
    const [passwordShown, setPasswordShown] = React.useState(false);
    const [passwordLabel, setPasswordLabel] = React.useState("Show Password")

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
        setPasswordLabel(passwordShown ? "Show Password": "Hide Password")
      };

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

        if (!regexEmail.test(values.txtLogin)) {
            errors.txtLogin = "Please provide a valid email address";
        }

        if (values.txtPassword.length < 6)
        {
            errors.txtPassword = "Password is too short";
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
                    <h3>Welcome to digiPROMs</h3>
                    <h6>New to digiPROMs ? <a href="#">Create an account</a> </h6>
                    <label>Login ID</label>
                    <input type="text" placeholder="Enter your login id" name="txtLogin" className="FieldsStyle" required maxLength={25} onChange={handleChange}></input>
                    <p className="ErrorMessage">{formErrors.txtLogin}</p>
                    <label>Password</label>
                    <input type={passwordShown ? "text" : "password"} placeholder="Enter your password" name="txtPassword" className="FieldsStyle" required maxLength={25} onChange={handleChange}></input>                
                    <p className="ErrorMessage">{formErrors.txtPassword}</p>
                </div>
                <div className="showpassword">
                     <FormGroup>
                     <FormControlLabel control={<Checkbox />} onChange={togglePassword} label={passwordLabel} />
                     </FormGroup>
                </div>
                <div className="forgotpassword">
                    <a href="#">forgot password ?</a>
                </div>
                <button className="ButtonStyle" role="button">Sign In</button>
            
                </form>
            </div>
        </div>
    )
}