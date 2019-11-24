import react from 'react'
import Title from '../pageElements/Title'
import './RegisterForm.css'
import {Form, Button} from semantics-ui-react
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'



class RegisterForm extends React.Component {
    // We created the constructor method which will be setting the initial state of the input fields

    constructor(props) {
        super(props) {
            this.state = {
                fields: {UsersFName: '', UsersLName: '', UsersEmail: '', UsersPassword: '', UsersPhone: ''},
                errors: {}
            }

            //Bind is being used in the parameters of the field

            this.handleChange = this.handleChange.bind(this)
            this.submitSignUpForm = this.submitSignUpForm.bind(this)
        }

        //This method is used to chnage any update when using the UserInterface

        let fields = this.state.fields
        fields[e.target.name] = e.target.value
        this.setState({
            fields
        })
    }

    //Creating validation to pass a variable with an empty field
    submitSignUpForm(e) {
        if (this.validateForm()) {
            let fields = {}
            fields["UserFName"] = ""
            fields["UsersLName"] = ""
            fields["UsersEmail"] = ""
            fields["UsersPassword"] = ""
            fields["UsersPhone"] = ""

            //The controller and the request is fetched with the help of the link from the Url. The requested file is converetd with the help of json file
            fetch('http://localhost:4200/api/account', {
                method: 'post',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({
                    "UsersFName": this.UsersFName.value,
                    "UsersLName": this.UsersLName.value,
                    "UsersEmail": this.UsersEmail.value,
                    "UsersPassword": this.UsersPassword.value,
                    "UsersPhone": this.UsersPhone.value,
                })
            })
            console.log("The User has created an Account.")
            //We are going to be displayed with a message telling us the form has been successfully submitted.
            alert("Form has been Submitted")
        }
    }
    // These steps are being followed to make sure correct information has been entered in the SignUp Form
    // We are using Validator tool to make sure the data entry is in correct order
    validateForm() {
        let fields = this.state.fields
        let errors = {}
        let formIsValid = true

        if (!fields["UsersFName"]) {
            formIsValid = false
            errors["UsersFName"] = "Enter your first name."
        }

        if (typeof fields["UsersFName"] !== "undefined") {
            if (!fields["UsersFName"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false
                errors["UsersFName"] = "Enter Name that contains alphabet"
            }
        }

        if (!fields["UsersLName"]) {
            formIsValid = false
            errors["UsersLName"] = "Enter your last name."
        }

        if (typeof fields["UsersLName"] !== "undefined") {
            if (!fields["UsersLName"].match(/^[a-zA-Z ]*$/)) {
                formIsValid = false
                errors["UsersLName"] = "*Please enter alphabet characters only."
            }
        }

        if (!fields["UsersEmail"]) {
            formIsValid = false
            errors["UsersEmail"] = "*Please enter your UsersEmail address."
        }

        if (typeof fields["UsersEmail"] !== "undefined") {
            var emailPattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i)
            if (!emailPattern.test(fields["UsersEmail"])) {
                formIsValid = false
                errors["UsersEmail"] = "Enter a valid UsersEmail address"
            }
        }

        if (!fields["UsersPhone"]) {
            formIsValid = false
            errors["UsersPhone"] = "Enter valid your UsersPhone number."
        }

        if (!fields["UsersPassword"]) {
            formIsValid = false
            errors["UsersPassword"] = "Enter the UsersPassword."
        }

        if (typeof fields["UsersPassword"] !== "undefined") {
            if (!fields["UsersPassword"].length >= 6) {
                formIsValid = false
                errors["UsersPassword"] = "Enter a strong and a secured UsersPassword."
            }
        }

        this.setState({
            errors: errors
        })
        return formIsValid
    }
    render() {
        return(
            <div className="formSignUp">
                <Title name="Users Sign Up Form" title=", Fill Correctly.." />
                <form method="post" name="signUpForm" onSubmit= {this.submitSignUpForm} >
                    <br />
                    <br />

                    <label> 
                        User's First Name: 
                    </label>
                    <input type="text" name="UsersFName" ref={(ref) => {this.UsersFName = ref}} placeholder= "Users First Name"
                    value={this.state.fields.UsersFName}
                    onChange={this.handleChange} />
                    <div className='errorNotification'>
                        {this.state.errors.UsersFName}
                    </div>

                    <label>
                        User's Last Name:
                    </label>
                    <input type="text" name="UsersLName" ref={(ref) => {this.UsersLName = ref}} placeholder= "Users Last Name"
                    value={this.state.fields.UsersLName}
                    onChange={this.handleChange} />
                    <div className='errorNotification'>
                        {this.state.errors.UsersLName}
                    </div>

                    <label>
                        User's Email Address:
                    </label>
                    <input type="text" name="UsersEmail" ref={(ref) => {this.UsersEmail = ref}} placeholder= "Users Email Address"
                    value={this.state.fields.UsersEmail}
                    onChange={this.handleChange} />
                    <div className='errorNotification'>
                        {this.state.errors.UsersEmail}
                    </div>
                
                    <label>
                        User's Password:
                    </label>
                    <input type="text" name="UsersPassword" ref={(ref) => {this.UsersPassword = ref}} placeholder= "Users Password"
                    value={this.state.fields.UsersPassword}
                    onChange={this.handleChange} />
                    <div className='errorNotification'>
                        {this.state.errors.UsersPassword}
                    </div>

                    <label>
                        User's Phone:
                    </label>
                    <input type="text" name="UsersPhone" ref={(ref) => {this.UsersPhone = ref}} placeholder= "Users Phone Number"
                    value={this.state.fields.UsersPhone}
                    onChange={this.handleChange} />
                    <div className='errorNotification'>
                        {this.state.errors.UsersPhone}
                    </div>

                    <br />
                    <br />

                    <input type="submit" className="buttonSubmit" value="Sign Up Form" />
                </form>
            </div>
        )
    }
}