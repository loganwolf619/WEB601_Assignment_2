import React from 'react'
import {Link} from 'react-router-dom'
import Title from '../../pageElements/Title'
import './EditUsers.css'

export default class MyUsers extends React.Component {
    // We are going too create a constructor by using props. 
    // Props Get the value of a property for the first element in the set of matched elements or set one or more properties for every matched element.
    constructor() {
        super()
        this.state = {
            objects: {UsersFName: '', UsersLName: '', UsersEmail: '', UsersPhone: '', UsersPassword: ''},
            errors: {}
        }
        //Now we are going to bind the functions and their objects inside the parameter
        //  The bind() method is going to attach one or more event handlers for selected elements, and specifies a function to run when the event occurs.
        // In this reagrd, we are going to we are going to attach the functions of the Graphics with the help of bind()

        this.handleanyChanges = this.handleanyChanges.bind(this)
        this.submitUsersForm = this.submitUsersForm.bind(this)
    }    
    // Now, we are going to apply updates to any properties based on any changes made by the user using GUI
    handleanyChanges(e) {
        let objects = this.state.objects
        objects[e.target.name] = e.target.value
        this.setState({
            objects
        })
    }

    // Next, this validation will pass a object without any data. Later, this objects get updated when dtaa is being entered with the help of instruction
    submitUsersForm(e) {
        e.lockDefault()
        if (this.validateUsersForm()) {
            let objects = {}
                objects["UsersFName"] = ""
                objects["UsersLName"] = ""
                objects["UsersEmail"] = ""
                objects["UsersPhone"] = ""
                objects["UsersPassword"] = ""

                this.setState({objects:objects})
                // Next, we are going to connect the Database with the JSON file, so that if any chnages that has been made will change our database record.
                // The controller is trying to fetch the information to update the database record
                fetch('https://localhost:4200/api/Users', {
                    method: 'put',
                    headers: {'Content-Type':'application/json'},
                    body: JSON.stringify({
                        "UsersFName": this.UsersFName.value,
                        "UsersLName": this.UsersLName.value,
                        "UsersEmail": this.UsersEmail.value,
                        "UsersPhone": this.UsersPhone.value,
                        "UsersPassword": this.UsersPassword.value,
                    })
                })
                // Now the users details has been added
                console.log("Users details has been added")
                //Next, wee are going to receive a message saying the users details has been added
                alert("Form has been submitted.")

        }
    }
    // Now, we will validate the Users form by ensuring that each object has been added and no object has been left empty
    validateUsersForm() {
        let objects = this.state.objects
        let errors = {}
        let usersformIsValid = true
        
        if(!objects["UsersFName"]) {
            usersformIsValid = false 
            errors["UsersFName"] = "Please enter your valid First Name"
        }

        if(!objects["UsersFName"] !== "Undefined") {
            if(!objects["UsersFName"].match(/^[a-zA-Z]*$/)) {
                errors["UsersFName"] = "Please Enter only alphabets to enter Users valid First Name"
            }
        }
        if(!objects["UsersLName"]) {
            usersformIsValid = false 
            errors["UsersLName"] = "Please enter your valid Last Name"
        }

        if(!objects["UsersLName"] !== "Undefined") {
            if(!objects["UsersLName"].match(/^[a-zA-Z]*$/)) {
                errors["UsersLName"] = "Please Enter only alphabets to enter Users Last Name"
            }
        }
        if(!objects["UsersEmail"]) {
            usersformIsValid = false 
            errors["UsersEmail"] = "Please enter your valid Email"
        }

        if(!objects["UsersEmail"] !== "Undefined") {
            var emailPatternType = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i)
            if(!emailPatternType.test(objects["UsersEmail"])) {
                errors["UsersEmail"] = "Please Enter only alphabets to enter Users valid Email"
            }
        }
        if(!objects["UsersPhone"]) {
            usersformIsValid = false 
            errors["UsersPhone"] = "Please enter your valid Phone"
        }
        if(!objects["UsersPassword"]) {
            usersformIsValid = false 
            errors["UsersPassword"] = "Please enter your valid Password"
        }
        if (!objects["UsersPassword"] !== "Undefined") {
            if (!objects["UsersPassword"].length >= 6) {
                usersformIsValid = false
                errors["UsersPassword"] = "Please enter a valid secured Password"
            }
        }
        this.setState({
            errors: errors
        })
        return usersformIsValid
    }


    // Now we are goign to create a form for the Users to fill Up
    render() {
        return(
            
            <div className="EditUsersForm">
                <Title name="Edit" title="Users Details" />
                <form method="sumbitForm" name="editUsersForm" onSubmit={this.submitUsersForm} ></form>
                <br />

                <form className="px-4 py-3">

                    <div className="form-group">
                        <label> "User's First Name"</label>
                        <input type="text" className="UsersFName" ref={(ref) => {this.UsersFName = ref}} value={this.state.objects.UsersFName} onChange={this.handleanyChanges} /> 
                    </div>
                    <div className="displayErrorMessage">{this.state.errors.UsersFName} </div>

                    <div className="form-group">
                        <label> "User's Last Name"</label>
                        <input type="text" className="UsersLName" ref={(ref) => {this.UsersLName = ref}} value={this.state.objects.UsersLName} onChange={this.handleanyChanges} /> 
                    </div>
                    <div className="displayErrorMessage">{this.state.errors.UsersLName} </div>

                    <div className="form-group">
                        <label> "User's Email Address"</label>
                        <input type="text" className="UsersEmail" ref={(ref) => {this.UsersEmail = ref}} value={this.state.objects.UsersEmail} onChange={this.handleanyChanges} /> 
                    </div>
                    <div className="displayErrorMessage">{this.state.errors.UsersEmail} </div>

                    <div className="form-group">
                        <label> "User's Phone Number"</label>
                        <input type="text" className="UsersPhone" ref={(ref) => {this.UsersPhone = ref}} value={this.state.objects.UsersPhone} onChange={this.handleanyChanges} /> 
                    </div>
                    <div className="displayErrorMessage">{this.state.errors.UsersPhone} </div>

                    <div className="form-group">
                        <label> "User's Password"</label>
                        <input type="text" className="UsersPassword" ref={(ref) => {this.UsersPassword = ref}} value={this.state.objects.UsersPassword} onChange={this.handleanyChanges} /> 
                    </div>
                    <div className="displayErrorMessage">{this.state.errors.UsersPassword} </div>

                    <br/>

                    <div className="form-check">
                        <input type="checkbox" className="checkForm"></input>
                        <label className="checkLabel" for="dropdownCheck">
                        Save
                        </label>
                    </div>
                    <div className="formConfirm">
                        <input type="submit" className="confirmButton" value="confirm">
                            confirm
                        </input>
                        <label className="checkLabel" for="dropdownCheck">
                        Save
                        </label>
                    </div>
                    <Link to="/MyUsers">
                        <input type="button" className="cancelButton" value="cancel">
                            Cancel
                        </input>
                    </Link>
            </form>
           </div>
        )
    }
}