import React, { Component } from 'react'
import './DisplayUsersToken.css'

export default class DisplayUsersToken extends React.Component {
    //Each User will be mapped to the container conatining list of Users. Then each User is identified by its own unique UsersID
    // Later, each User is displayed with the help of UsersID from its container to a display portal

    render() {
        return(
            <div className="usersContainer">
                {this.props.Users.map((DisplayUsersToken) => (
                    <div className="users" key={DisplayUsersToken.UsersEmail}>
                        <h3>{DisplayUsersToken.UsersFName}</h3>
                        <h3>{DisplayUsersToken.UsersLName}</h3>
                        <h3>{DisplayUsersToken.UsersPhone}</h3>
                        <h3>{DisplayUsersToken.UsersEmail}</h3>
                        <h3>{DisplayUsersToken.UsersPassword}</h3>
                    </div>
                ))}
            </div>
        )
    }
}