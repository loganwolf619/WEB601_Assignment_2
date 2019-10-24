import React from 'react';
import {Link} from 'react-router-dom';
import Title from '../../pageElements/Title';
import DisplayUsers from '../../data/DisplayUsers/DisplayUsersToken';
import './MyUsers.css';

export default class MyUsers extends React.Component {
      // We are going too create a constructor by using props. 
    // Props Get the value of a property for the first element in the set of matched elements or set one or more properties for every matched element.
    constructor(props) {
        super(props)
            this.state = ({
                isGetting: false,
                Graphics: []
            })
    }

    // Now we are going to get Graphics with the help of get
    componentDidMount() {
        this.getGraphics()
    }
    // Now we are going to display all the Graphics that has been exported from the Database and distributed in the Graphics Container
    getUsers() {
        fetch('https://localhost:4200/api/Graphics')
        .then(res => res.json())
        .then(data => {
            if(data.code === '404') {
                this.setState({
                    isGetting: false,
                })
            } else {
                this.setState({
                    isGetting: true,
                    Users: data,
                })
            }
        })
        .catch(error => {
            console.log(error)
        })
    }
    render() {
        return(
            <div className="myUsersWrapper">
                <section className="usersDetails">
                    <Title name="Personal" tite="Account" />
                    <div className="usersContainer">
                        <form className="modal-content animate" action="action" method="post">
                            <div className="imgcontainer">
                                <br/>
                                <h3> Users's First Name </h3>
                                <h3> Users's Last Name </h3>
                                <h3> User's Email </h3>
                                <h3> User's Phone </h3> 
                                <h3> User's Password </h3>
                                <br/>
                                    
                                <div className="imgContainer2">
                                    <DisplayUsers Users={this.state.Users} />
                                </div>

                                <Link to='/EditUsers' Users={this.state.Users}>
                                    <button type="button" className="editButton hover">Edit</button>
                                </Link>
                            </div>
                    </form>
                    </div>
                </section>
            </div>

        )
    }
}