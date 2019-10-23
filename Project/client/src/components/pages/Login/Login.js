import React from 'react';
import RegisterFrom from '../../forms/RegisterForm';
import Title from '../../pageElements/Title';
import './Login.css';


export default class Login extends React.Component {
    submitData = (data) => {
        console.log(data)
    }

    render() {
        <div className="login">
            <h2>Login Form</h2>
            <button onclick="document.getElementById('id01').style.display='block'" style="width:auto;">Login</button>

            <div id="id01" className="modal">
            
                <form className="modal-content animate" action="action" method="post">
                    <div className="imgcontainer">
                        <span onclick="document.getElementById('id01').style.display='none'" className="close" title="Close Modal">&times;</span>
                        <img src="#" alt="Avatar" className="image" />
                            
                        <div className="loginPageWrapper">
                            <section className="loginPage">
                                <Title name="User" title="Login" />
                                <br />
                                <div>
                                    <div className="loginObjects">
                                        <Login submitData={this.submitData} />
                                    </div>
                                </div>
                            </section>
                        </div>

                        <div className="container" style="background-color:#f1f1f1">
                            <button type="button" className="cancelbtn">Cancel</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    }
}