import React from 'react';
import Title from '../../pageElements/Title';
import './Register.css';


export class Register extends React.Component {
    
    // We are going too create a constructor by using props. 
    // Props Get the value of a property for the first element in the set of matched elements or set one or more properties for every matched element.
    constructor() {
    super()
    this.state = {
        objects: {UsersFName: '', UsersLName: '', UsersPassword: '', UsersEmail: '', UsersPhone: ''},
        errors: {}
    }

    // We are going to use bind.
    // The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
    this.handleAnyChanges = this.handleAnyChanges.bind(this)
    this.submitUsersRegistration = this.submitUsersRegistration.bind(this)
    }

    // Method to update the properties state upon any change made by the user to a UI property.
    handleChange(e) {
        let objects = this.state.objects
        objects[e.target.name] = e.target.value
        this.setState({
            objects
        })
    }

    // 
    submitUsersRegistration(e) {
        e.preventDefault()
        if (this.validateForm()) {
            let objects = {}
            objects["UsersFName"] = ""
            objects["UsersLName"] = ""
            objects["UsersEmail"] = ""
            objects["UsersPhone"] = ""
            objects["UsersPassword"] = ""
            this.setState({objects:objects})
          // We are trying to connect our database with the curre
          fetch('http://localhost:4200/api/Users', {
            method: 'post',
            headers: {'Content-Type':'application/json'},
            body: JSON.stringify({
                "UsersFName": this.UsersFName.value,
                "UsersLName": this.UsersLName.value,
                "UsersEmail": this.UsersEmail.value,
                "UsersPhone": this.UsersPhone.value,
                "UsersPassword": this.UsersPassword.value,
            })
        })
            // The user has created the account in the website. Then we will receiving a message saying an account has been create.
            console.log("We have created the account")
            alert("Form has been submitted")
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
      if (typeof objects["UsersPassword"] !== "Undefined") {
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

      render() {
            return(
                <div className="usersRegistrationForm">
                  <Title name="Users" title="Sign Up" />
                  <form method="post" name="usersRegistrationForm" onSubmit={this.submitUsersRegistration} >

                      <div className="usersForm">
                        <label for="FirstName">First Name</label>
                        <input type="text" name="usersFirstName" id="usersFirstName" ref={(ref) => {this.UsersFName = ref}} placeholder="User's First Name is: " value={this.state.objects.UsersFName}></input>                    
                          <div className="displayErrorNotification">
                              {this.state.errors.UsersFName}
                          </div>
                      </div>

                      <div className="usersForm">
                        <label for="LastName">Email Name</label>
                        <input type="text" name="usersLastName" id="usersLastName" ref={(ref) => {this.UsersLName = ref}} placeholder="User's Last Name is: " value={this.state.objects.UsersLName}></input>                    
                          <div className="displayErrorNotification">
                              {this.state.errors.UsersLName}
                          </div>
                      </div>

                      <div className="usersForm">
                        <label for="Email">Email</label>
                        <input type="text" name="Email" id="usersEmail" ref={(ref) => {this.UsersEmail = ref}} placeholder="User's Email is: " value={this.state.objects.UsersEmail}></input>                    
                          <div className="displayErrorNotification">
                              {this.state.errors.UsersEmail}
                          </div>
                      </div>

                      <div className="usersForm">
                        <label for="Phone">Phone</label>
                        <input type="text" name="usersPhoneNumber" id="usersPhoneNumber" ref={(ref) => {this.UsersPhone = ref}} placeholder="User's Phone Number is: " value={this.state.objects.UsersPhone}></input>                    
                          <div className="displayErrorNotification">
                            {this.state.errors.UsersPhone}
                          </div>
                      </div>
                      <div className="usersForm">
                        <label for="Password">Phone</label>
                        <input type="text" name="usersPassword" id="usersPassword" ref={(ref) => {this.UsersPassword = ref}} placeholder="User's Password is: " value={this.state.objects.UsersPassword}></input>                    
                          <div className="displayErrorNotification">
                            {this.state.errors.UsersPassword}
                          </div>
                      </div>
                      <div class="form-check">
                        <input type="checkbox" class="form-check-input" id="dropdownCheck"></input>
                        <label className="form-check-label" for="dropdownCheck">
                            Remember me
                        </label>
                      </div>
                      <br />
                      <input type="submit" className="button" value="Register" />
                  </form>
                </div>
            )
    }
}


//             <div>

    //   <form className="px-4 py-3">
    //     <div className="form-group">
    //       <label for="exampleDropdownFormEmail1">Email address</label>
    //       <input type="UsersEmail" className="form-control" id="exampleDropdownFormEmail1" placeholder="UsersEmail@example.com"></input>
    //     </div>
    //     <div class="form-group">
    //       <label for="exampleDropdownFormPassword1">Password</label>
    //       <input type="UsersPassword" className="form-control" id="exampleDropdownFormPassword1" placeholder="Password"></input>
    //     </div>
    //     <div class="form-check">
    //       <input type="checkbox" class="form-check-input" id="dropdownCheck"></input>
    //       <label className="form-check-label" for="dropdownCheck">
    //         Remember me
    //       </label>
    //     </div>
    //     <button type="submit" className="btn btn-primary">Sign in</button>
    //   </form>
    //   <div className="dropdown-divider"></div>
    //   <a claclassNamess="dropdown-item" href="#">New around here? Sign up</a>
    //   <a className="dropdown-item" href="#">Forgot UsersPassword?</a>
    // </div>