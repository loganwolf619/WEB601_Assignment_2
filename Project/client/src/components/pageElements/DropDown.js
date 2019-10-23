import React, { Component } from 'react'
import {Link} from 'react-router-dom'

export default class DropDown extends Component {
    constructor() {
        super()

        this.state = {
            displayMenu: false,
        }

        this.showDropDownMenu = this.showDropDownMenu.bind(this)
        this.hideDropDownMenu = this.hideDropDownMenu.bind(this)
    };

    showDropDownMenu(event) {
        event.preventDefault()
        this.setState({ displayMenu: true }, () => {
            document.addEventListener('MouseHover', this.hideDropDownMenu)
        })
    }

    hideDropDownMenu(event) {
        this.setState({ displayMenu: false }, () => {
            document.removeEventListener('MouseHover', this.hideDropDownMenu)
        })
    }

    render() {
        return (
            <div className="dropdown">
                <div>
                    <div className="dropdownButton" onMouseEnter={this.showDropDownMenu} onMouseMove={this.hideDropDownMenu} >
                       User's Account

                       { this.state.displayMenu ? (
                           <ul>
                                <li className="navbar-link">
                                <Link to="" className="navbar-link">
                                        <ButtonContainer>
                                            <span className="mr-2">
                                                Log Out
                                            </span>
                                        </ButtonContainer>   
                                    </Link>
                                </li>
                                <li className="navbar-link">
                                    <Link to="/uploadgraphics" className="navbar-link">
                                        <ButtonContainer>
                                            <span className="mr-2">
                                                <a className="fas fa-upload"  href="uploadgraphics">
                                                    Upload Graphics
                                                </a>
                                            </span>
                                        </ButtonContainer>   
                                    </Link>
                                </li>
                                <li className="navbar-link">
                                <Link to="/mygraphics" className="navbar-link">
                                        <ButtonContainer>
                                            <span className="mr-2">
                                                My Graphics
                                            </span>
                                        </ButtonContainer>   
                                    </Link>
                                </li>
                                <li className="navbar-link">
                                <Link to="/myusers" className="navbar-link">
                                        <ButtonContainer>
                                            <span className="mr-2">
                                                My Users
                                            </span>
                                        </ButtonContainer>   
                                    </Link>
                                </li>
                           </ul>
                       ):
                       (
                           null
                       )
                    }
                    </div>
                </div>
            </div>
        )
    }
}

{/* <li className="navbar-item">
<Link to="/editusers" className="navbar-item">
  <a className="nav-link" href="message">Edit Users</a>
</Link>
</li>



 */}