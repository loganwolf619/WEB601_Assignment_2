import React from 'react'
import PropTypes from 'prop-types'
import { Form, Button} from 'semantic-ui-react'
import Validator from 'validator'
import ErrorMessage from '../message/ErrorMessage'
import './RegisterForm.css'
import { ButtonContainer, ButtonForm } from '../pageElements/Button'

class RegisterForm extends React.Component {
    state = {
        data: {
            UsersEmail: '',
            UsersPassword: ''
        },
        loading: false,
        errors: {}
    }

    onChange = e =>
    this.setState({
        data: {...this.state.data, [e.target.name]: e.target.value}
    })

    onSubmit = () => {
        const ErrorNotification = this.validate(this.state.data)
        this.setState({ ErrorNotification })
        if (Object.keys(ErrorNotification).length === 0) {
            this.props.submit(this.state.data)
        }
    }
    
    validate = (data) => {
        const ErrorNotification = {}
        if(!Validator.isUsersEmail(data.UsersEmail)) ErrorNotification.UsersEmail = "Incorrect Email Address"
        if(!Validator.isUsersPassword) ErrorNotification.UsersPassword = "Enter the Correct Password"
        return ErrorNotification
    }

    render() {
        const { data, ErrorNotification } = this.state
        return (
         <Form class="modal-content animate"  action="/action_page.php" method="post" onSubmit={this.onSubmit}>
             <label>UsersEmail</label>
             <Form.Field error={!!ErrorNotification.UsersEmail}>
                 <input>
                    type="UsersEmail"
                    id="UsersEmail"
                    name="UsersEmail"
                    placeholder="email@email.com"
                    value={data.UsersEmail}
                    onChange={this.onChange}
                 </input>
                 {ErrorNotification.UsersEmail && <ErrorMessage text={ErrorNotification.UsersEmail} />}
             </Form.Field>
             <label>
                 UsersPassword
             </label>
             <Form.Field error={!!ErrorNotification.UsersPassword}>
                 <input>
                    type="UsersPassword"
                    id="UsersPassword"
                    name="UsersPassword"
                    placeholder="Password1"
                    value={data.UsersPassword}
                    onChange={this.onChange}
                 </input>
                 {ErrorNotification.UsersPassword && <ErrorMessage texr={ErrorNotification.UsersPassword} />}
                 <label>
                        <input type="checkbox" checked="checked" name="remember"> 
                            Remember me 
                        </input>
                 </label>
                 <br />
                 <br />
                 <ButtonForm>
                    Register
                 </ButtonForm>
             </Form.Field>
         </Form>   
        );
    }
}

RegisterForm.PropTypes = {
    submit: PropTypes.func.isRequired
}

export default RegisterForm