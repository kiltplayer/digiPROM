import React from "react"
import "./Registration.css"
import {ErrorSharp, PersonAdd} from "@mui/icons-material"
import TextField from '@mui/material/TextField';
import Divider from '@mui/material/Divider'
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { useEffect } from "react"

export default function Registration(){
    const initialFormValues = {firstName : "", lastName : "" , birthDate : null, gender : "", mobile : "", email : "", address : "", patCondition : "", clanComments : "" }
    const [formValues, setFormValues] = React.useState({});
    const [formErrors, setFormErrors] = React.useState({});
    const [isSubmit, setIsSubmit] = React.useState(false);

    const [dateValue, setDateValue] = React.useState(null);

    const handleChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setFormValues(values => ({...values, [name]: value}))
    }
    
    const handleSubmit = (e) => {
        e.preventDefault();
        setFormErrors(validate(formValues, dateValue));
        setIsSubmit(true);
        console.log(formValues);
    }

    useEffect(()=>{
        if (Object.keys(formErrors).length === 0 && isSubmit) {
            console.log(formValues);
        }
    },[formErrors]);

    const validate = (values, dateValue) => {
        const errors = {};
        const regexEmail = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i; //regex for email 
        const regexMobile = /^((\+44)|(0)) ?\d{4} ?\d{6}$/i; //regex for UK Mobile

        if (!regexMobile.test(values.txtMobile)){
            errors.txtMobile = "Please provide a valid UK Mobile Number";
        }

        if (values.txtEmail.length > 0) 
        {
            if (!regexEmail.test(values.txtEmail)) {
                errors.txtEmail = "Please provide a valid email address";
            }
        }
        if (!checkDate(dateValue)) {
            errors.birthDate = "Please provide the valid birth date"
        }
        console.log(values);

        return errors;
    }   


    const checkDate = (date) => {
        return (new Date(date) !== "Invalid Date") && !isNaN(new Date(date));
      }
      
    
    return(
        <div className="Registration">
            <form onSubmit={handleSubmit}>
            <div className="RegistrationHeading"><PersonAdd className="RegistrationHeadingIcon" style={{fontSize:28}}/><span className="RegistrationHeadingTitle">Register New Patient</span>
            </div>
            <div className="RegistrationBoxWrapper">
            
            <div className="RegistrationBox">
                <div className="BoxTitle">Personal Information  : </div>
                <Divider/>
                <div className="MainContainer">
                    <div className="RowContainer">
                        <div id="title"><label>First Name *</label></div>
                        <div id="field"><input type="text" placeholder="Enter first name" name="txtFirstName" className="FieldsStyle" required onChange={handleChange}></input></div>
                    </div>
                    <div className="RowContainer">
                        <div id="title"><label>Last Name *</label></div>
                        <div id="field"><input type="text" placeholder="Enter last name" name="txtLastName" className="FieldsStyle" required onChange={handleChange}></input></div>
                    </div>
                    <div className="RowContainer">
                        <div id="title"><label>Date of Birth *</label></div>
                        <div id="field">
                            <LocalizationProvider dateAdapter={AdapterDateFns}>
                                <DatePicker
                                    openTo="year"
                                    views={['year', 'month', 'day']}
                                    value={dateValue}
                                    onChange={(newValue) => {
                                        setDateValue(newValue);
                                    }}
                                    // onChange={handleChange}
                                    renderInput={(params) => <TextField {...params} sx={{ width: 315, ml:1}} required/>}
                                />
                            </LocalizationProvider>
                    </div>
                    </div>
                    <div className="RowContainer" style={{height: 60}}>
                        <div id="title"><label>Gender *</label></div>
                            <div id="field">
                                <div className="genderGroup">
                                    <input type="radio" id="male" name="gender" value="male" onChange={handleChange}/><label for="male">Male</label>
                                    <input type="radio" id="female" name="gender" value="female" onChange={handleChange}/><label for="female">Female</label>
                                    <input type="radio" id="prefernottosay"  name="gender" value="prefernottosay" onChange={handleChange}/><label for="Prefernottosay">Prefer not to say</label>
                                </div>
                            </div>
                        </div>
                    <div className="RowContainer">
                        <div id="title"><label>Mobile *</label></div>
                        <div id="field"><input type="text" placeholder="Enter your mobile number" name="txtMobile" className="FieldsStyle" required onChange={handleChange}></input></div>
                    </div>
                    <div className="RowContainer">
                        <div id="title"><label>Email</label></div>
                        <div id="field"><input type="text" placeholder="Enter your email" name="txtEmail" className="FieldsStyle" onChange={handleChange}></input></div>
                        
                    </div>
                    <div className="RowContainer">
                        <div id="title"><label>Address</label></div>
                        <div id="field"><input type="text" placeholder="Enter your address" name="txtAddress" className="FieldsStyle" onChange={handleChange}></input></div>
                    </div>
                </div>


                
            </div>
            
            <div className="RegistrationBox">
                <div className="BoxTitle">Clinical Information : </div>
                <Divider/>
                <div className="MainContainer">
                    <div className="RowContainerMultiLine">
                        <div className="div1"><label>Patient's Condition</label></div>
                        <div className="div2"><textarea name="txtPatientCond" className="MultilineFieldsStyle" placeholder="Patient's Condition" cols="40" rows="5" onChange={handleChange} ></textarea></div>
                    </div>
                    <div className="RowContainerMultiLine">
                        <div className="div1"><label>Clinician Comments</label></div>
                        <div className="div2"><textarea name="txtClinician" className="MultilineFieldsStyle" placeholder="Clinician Comments" cols="40" rows="5" onChange={handleChange}></textarea></div>
                    </div>
                    <div className="ButtonDiv">
                        {/* <button type="submit" className="ButtonStyle">Click me Bhi</button> */}
                        <button class="ButtonStyle" role="button">Add Patient</button>

                    </div>
                    <div className="ErrorDiv">
                        <p>{formErrors.birthDate}</p>
                        <p>{formErrors.txtMobile}</p>
                        <p>{formErrors.txtEmail}</p>
                    </div>
                </div>
                
            </div>
            </div>
            
            </form>

        </div>
    )
}