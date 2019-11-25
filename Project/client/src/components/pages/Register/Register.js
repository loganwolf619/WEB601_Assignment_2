import React from 'react';
import Title from '../../pageElements/Title';
import './Register.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {Form, Button} from 'semantic-ui-react';
import { usersAction } from '../../../actions/usersAction';


class Register extends React.Component {    
    // We are going too create a constructor by using props. 
    // Props Get the value of a property for the first element in the set of matched elements or set one or more properties for every matched element.
    constructor() {
    super()
    this.state = {
        fields: {UsersFName: '', UsersLName: '', UsersPassword: '', UsersEmail: '', UsersPhone: ''},
        submitForm: false,
        errors: {}
    }

    // We are going to use bind.
    // The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
    this.handleChange = this.handleChange.bind(this)
    this.submitUsersRegistration = this.submitUsersRegistration.bind(this)
    }

    // Method to update the properties state upon any change made by the user to a UI property.
    handleChange(e) {
        const {usersName, value} = e.target
        const {fields} = this.state
        this.setState({
            fields: {
                ...fields,
                [usersName]: value
            }
        })
    }

    // 
    submitUsersRegistration(e) {
        e.preventDefault()
        this.setState({ submitForm: true })
        const {fields} = this.state
        if (this.validateForm()) {
            if (fields.UsersFName && fields.UsersLName && fields.UsersEmail && fields.UsersPhone && fields.UsersPassword) {
                this.props.register(fields)
            }
            // The user has created the account in the website. Then we will receiving a message saying an account has been create.
            console.log("We have created the account")
            alert("Form has been submitForm")
        }
    }
    // Now, we will validate the Users form by ensuring that each object has been added and no object has been left empty
    validateUsersForm() {
      let fields = this.state.fields
      let errors = {}
      let usersformIsValid = true
      
      if(!fields["UsersFName"]) {
          usersformIsValid = false 
          errors["UsersFName"] = "Please enter your valid First Name"
      }

      if(!fields["UsersFName"] !== "Undefined") {
          if(!fields["UsersFName"].match(/^[a-zA-Z]*$/)) {
              errors["UsersFName"] = "Please Enter only alphabets to enter Users valid First Name"
          }
      }
      if(!fields["UsersLName"]) {
          usersformIsValid = false 
          errors["UsersLName"] = "Please enter your valid Last Name"
      }

      if(!fields["UsersLName"] !== "Undefined") {
          if(!fields["UsersLName"].match(/^[a-zA-Z]*$/)) {
              errors["UsersLName"] = "Please Enter only alphabets to enter Users Last Name"
          }
      }
      if(!fields["UsersEmail"]) {
          usersformIsValid = false 
          errors["UsersEmail"] = "Please enter your valid Email"
      }

      if(!fields["UsersEmail"] !== "Undefined") {
          var emailPatternType = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i)
          if(!emailPatternType.test(fields["UsersEmail"])) {
              errors["UsersEmail"] = "Please Enter only alphabets to enter Users valid Email"
          }
      }
      if(!fields["UsersPhone"]) {
          usersformIsValid = false 
          errors["UsersPhone"] = "Please enter your valid Phone"
      }
      if(!fields["UsersPassword"]) {
          usersformIsValid = false 
          errors["UsersPassword"] = "Please enter your valid Password"
      }
      if (!fields["UsersPassword"] !== "Undefined") {
          if (!fields["UsersPassword"].length >= 12) {
              usersformIsValid = false
              errors["UsersPassword"] = "Please enter a valid secured Password"
          }
      }
      this.setState({
          errors: errors
      })
      return usersformIsValid
  }

  render() {
    // const {registering} = this.props
    const { fields, submitForm } = this.state
    return(
        <div className="registerContainer">
            <div className="registrationForm">
                <Title name="Registration" title="Form" />
                <Form name="registrationForm" onSubmit= {this.submitSignUpForm} >
                    <br /> 
                    <div className={'groupForm' + (submitForm && !fields.UsersFName ? 'error' : '')}>
                        <label>User's First Name</label> 
                        <input type="text"  className="controlForm" name="UsersFName" placeholder="User's First Name:" 
                            value={fields.UsersFName} 
                            onChange={this.handleChange} />   
                            {submitForm && !fields.UsersFName && 
                                <div className="controlHelp">Please Enter your first name</div>
                            }
                    </div>
                    <div className='errorNotification'>{this.state.errors.UsersFName}</div>
                    
                    <div className={'groupForm' + (submitForm && !fields.UsersLName ? 'error' : '')}>
                        <label>User's Last Name</label> 
                        <input type="text" className="controlForm" name="UsersLName" placeholder="User's Last Name:" 
                            value={fields.UsersLName} 
                            onChange={this.handleChange} />   
                            {submitForm && !fields.UsersLName && 
                                <div className="controlHelp">Please Enter ypur last name</div>
                            }
                    </div>
                    <div className='errorNotification'>{this.state.errors.UsersLName}</div>
                    
                    <div className={'groupForm' + (submitForm && !fields.UsersEmail ? 'error' : '')}>
                        <label>Email Address</label>
                        <input type="text"  className="controlForm"name="UsersEmail" placeholder="User's Email Address is:" 
                            value={fields.UsersEmail} 
                            onChange={this.handleChange} />   
                            {submitForm && !fields.UsersEmail && 
                                <div className="controlHelp">Please enter the UsersEmail address</div>
                            }
                    </div>
                    <div className='errorNotification'>{this.state.errors.UsersEmail}</div>
                    
                    <div className={'groupForm' + (submitForm && !fields.UsersPhone ? 'error' : '')}>
                        <label>User's Phone</label>
                        <input type="text" className="controlForm"name="UsersPhone" placeholder="User's Phone number is:" 
                            value={fields.UsersPhone} 
                            onChange={this.handleChange} />   
                            {submitForm && !fields.UsersPhone && 
                                <div className="controlHelp">Please enter the Phone number</div>
                            }
                    </div>
                    <div className='errorNotification'>{this.state.errors.UsersPhone}</div>
                   
                    <div className={'groupForm' + (submitForm && !fields.UsersPassword ? 'error' : '')}>
                        <label>User's Password</label>
                        <input type="text" className="controlForm"name="UsersPassword" placeholder="Choose a UsersPassword.." 
                            value={fields.UsersPassword} 
                            onChange={this.handleChange} />   
                            {submitForm && !fields.UsersPassword && 
                                <div className="controlHelp">Password is required</div>
                            }
                    </div>
                    <div className='errorNotification'>{this.state.errors.UsersPassword}</div>
                    <br />
                    <div className='groupForm'>
                        <Button className="button">Register</Button> 
                        <Link to="/" className="button button-link">Cancel</Link>
                    </div>
                </Form>
            </div>
        </div>
    )
}
}


function mapState(state) {
    const {registering} = state.registration
    return {registering}
}

const actionCreators = {
    register: usersAction.register
}

const connectedRegisterPage = connect(mapState, actionCreators)(Register)
export { connectedRegisterPage as RegisterPage }
