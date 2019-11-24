import React from 'react';
import './ContactUs.css';
import Title from '../../pageElements/Title';
import {Link} from 'react-router-dom';

export default class ContactUs extends React.Component {
      // We are going too create a constructor by using props. 
    // Props Get the defaultValue of a property for the first element in the set of matched elements or set one or more properties for every matched element.
    constructor() {
        super()
        this.state = {
            fields: {UsersFName: '', UsersLName: '', UsersPassword: '', UsersEmail: '', UsersPhone: ''},
            submitForm: false,
            errors: {}
        }
    
        // We are going to use bind.
        // The bind() method creates a new function that, when called, has its this keyword set to the provided defaultValue, with a given sequence of arguments preceding any provided when the new function is called.
        this.handleChange = this.handleChange.bind(this)
        this.submitUsersRegistration = this.submitUsersRegistration.bind(this)
        }
    
        // Method to update the properties state upon any change made by the user to a UI property.
        handleChange(e) {
            const {usersName, defaultValue} = e.target
            const {fields} = this.state
            this.setState({
                fields: {
                    ...fields,
                    [usersName]: defaultValue
                }
            })
        }
      // Next, this validation will pass a object without any data. Later, this fields get updated when dtaa is being entered with the help of instruction
      submitUsersForm(e) {
        e.lockDefault()
        if (this.validateForm()) {
            let fields = {}
                fields["UsersFName"] = ""
                fields["UsersLName"] = ""
                fields["UsersEmail"] = ""
                fields["UsersPhone"] = ""
                fields["UsersPassword"] = ""

                this.setState({fields:fields})
                // Next, we are going to connect the Database with the JSON file, so that if any chnages that has been made will change our database record.
                // The controller is trying to fetch the information to update the database record
                fetch('http://localhost:4200/api/Users', {
                    method: 'put',
                    headers: {'Content-Type':'application/json'},
                    body: JSON.stringify({
                        "UsersFName": this.UsersFName.defaultValue,
                        "UsersLName": this.UsersLName.defaultValue,
                        "UsersEmail": this.UsersEmail.defaultValue,
                        "UsersPhone": this.UsersPhone.defaultValue,
                        "UsersPassword": this.UsersPassword.defaultValue,
                    })
                })
                // Now the users details has been added
                console.log("Users details has been added")
                //Next, wee are going to receive a message saying the users details has been added
                alert("Form has been submitted.")

        }
    }
    // Now, we will validate the Users form by ensuring that each object has been added and no object has been left empty
    validateForm() {
        let fields = this.state.fields
        let errors = {}
        let formValidity = true
        
        if(!fields["UsersFName"]) {
            formValidity = false 
            errors["UsersFName"] = "Please enter your valid First Name"
        }

        if(!fields["UsersFName"] !== "Undefined") {
            if(!fields["UsersFName"].match(/^[a-zA-Z]*$/)) {
                errors["UsersFName"] = "Please Enter only alphabets to enter Users valid First Name"
            }
        }
        if(!fields["UsersLName"]) {
            formValidity = false 
            errors["UsersLName"] = "Please enter your valid Last Name"
        }

        if(!fields["UsersLName"] !== "Undefined") {
            if(!fields["UsersLName"].match(/^[a-zA-Z]*$/)) {
                errors["UsersLName"] = "Please Enter only alphabets to enter Users Last Name"
            }
        }
        if(!fields["UsersEmail"]) {
            formValidity = false 
            errors["UsersEmail"] = "Please enter your valid Email"
        }

        if(!fields["UsersEmail"] !== "Undefined") {
            var emailPatternType = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i)
            if(!emailPatternType.test(fields["UsersEmail"])) {
                errors["UsersEmail"] = "Please Enter only alphabets to enter Users valid Email"
            }
        }
        if(!fields["UsersPhone"]) {
            formValidity = false 
            errors["UsersPhone"] = "Please enter your valid Phone"
        }
        if(!fields["UsersPassword"]) {
            formValidity = false 
            errors["UsersPassword"] = "Please enter your valid Password"
        }
        if (!fields["UsersPassword"] !== "Undefined") {
            if (!fields["UsersPassword"].length >= 6) {
                formValidity = false
                errors["UsersPassword"] = "Please enter a valid secured Password"
            }
        }
        this.setState({
            errors: errors
        })
        return formValidity
    }
   // Now we are goign to create a form for the Users to fill Up
   render() {
    return(                
                <div className="contactFormContainer">
                    <Title name="ContactUs" title="Contact Details" />
                    <form name="sumbitContactForm" onSubmit={this.submitUsersForm} >
                        <br /> 
                        <label>User's First Name</label> 
                        <input type="text" name="UsersFName" ref={(ref) => {this.UsersFName = ref}} placeholder="User's First Name:" defaultValue={this.state.fields.UsersFName} onChange={this.handleChange} />   
                        <div className='errorMessage'>{this.state.errors.UsersFName}</div>
                        <label>Last Name</label> 
                        <input type="text" name="UsersLName" ref={(ref) => {this.UsersLName = ref}} placeholder="User's Last Name:" defaultValue={this.state.fields.UsersLName} onChange={this.handleChange} />   
                        <div className='errorMessage'>{this.state.errors.UsersLName}</div>
                        <label>Email Address</label>
                        <input type="text" name="UsersEmail" ref={(ref) => {this.UsersEmail = ref}} placeholder="User's email:" defaultValue={this.state.fields.UsersEmail} onChange={this.handleChange} />   
                        <div className='errorMessage'>{this.state.errors.UsersEmail}</div>
                        <label>Phone</label>
                        <input type="text" name="UsersPhone" ref={(ref) => {this.UsersPhone = ref}} placeholder="User's phone:" defaultValue={this.state.fields.UsersPhone} onChange={this.handleChange} />   
                        <div className='errorMessage'>{this.state.errors.UsersPhone}</div>
                        <label>Password</label>
                        <input type="text" name="UsersPassword" ref={(ref) => {this.UsersPassword = ref}} placeholder="User's password:" defaultValue={this.state.fields.UsersPassword} onChange={this.handleChange} />   
                        <div className='errorMessage'>{this.state.errors.UsersPassword}</div>
                        <br />
                        <input type="submit" className="confirmButton" defaultValue="Submit" />
                        <Link to="/MyUsers">
                            <input type="button" className="cancelButton" defaultValue="Cancel" />
                        </Link>
                    </form>
            </div>
        )
    }
}
