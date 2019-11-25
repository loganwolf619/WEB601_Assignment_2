import React from 'react';
//import RegisterForm from '../../forms/RegisterForm';
import Title from '../../pageElements/Title';
import {Form, Button} from 'semantic-ui-react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'
import {usersAction} from '../../../actions/usersAction'
import './Login.css';



class LoginPage extends React.Component {
    constructor(props) {
      super(props)
  
      this.props.usersLogout()
  
      this.state = {
          UsersEmail: '',
          UsersPassword: '',
          errors: {},
          formSubmitted: false
      }
  
      this.handleChange = this.handleChange.bind(this)
      this.submitRegistration = this.submitRegistration.bind(this)
    }
  
  
    handleChange(e) {
      const {UsersFName, value} = e.target
      this.setState({ [UsersFName]: value })
    }
  
  
    submitRegistration(e) {
      e.preventDefault()
  
      this.setState({ formSubmitted: true })
      const {UsersEmail, UsersPassword} = this.state
      if (UsersEmail && UsersPassword) {
        this.props.usersLogin(UsersEmail, UsersPassword)
      }
    }
  
    render() {
        // const { loggingIn } = this.props
        const { UsersEmail, UsersPassword, formSubmitted } = this.state
    
        return (
          <div className="loginContainer">
            <section className="registerForm">
              <Title name="UserName" title="LoginUser" />
              <br />
              <div>
                <div className='registrationFields'>
                  <Form onSubmit={this.submitLoginForm}>
                    <div className={'groupForm' + (formSubmitted && !UsersEmail ? 'hasError' : '')}>
                      <label>Email</label>
                      <input 
                        className="controlForm"
                        type="text"
                        name="UsersEmail"
                        placeholder="example@example.com.."
                        value={UsersEmail}
                        onChange={this.handleChange}
                        field="UsersEmail"
                        />
                        {formSubmitted && !UsersEmail &&
                          <div className="helpForm">Email is required</div>}
                    </div>
                    <div className={'groupForm' + (formSubmitted && !UsersPassword ? 'hasError' : '')}>
                      <label>Users Password</label>
                      <input 
                        className="controlForm"
                        type="text"
                        name="UsersPassword" 
                        placeholder="Password.."
                        value={UsersPassword}
                        onChange={this.handleChange}
                        />
                        {formSubmitted && !UsersPassword &&
                        <div className="helpForm">Password is required</div>}
                    </div>
                    <br />
                    <div className="form-group">
                      <Button primary className="buttonLogin">Login</Button>
                      <Link to="/Register" className="button">Register</Link>
                    </div>
                  </Form>      
                </div>
              </div>
            </section> 
          </div> 
        )
      }
    }
    
function mapState(state) {
    const {loggingIn} = state.authentication
    return {loggingIn}
  }
  
  const actionCreators = {
    usersLogin: usersAction.usersLogin,
    usersLogout: usersAction.usersLogout
  }
  
  const connectedLoginPage = connect(mapState, actionCreators)(LoginPage)
  export {connectedLoginPage as LoginPage}