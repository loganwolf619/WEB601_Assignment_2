import React from 'react'
import {Link} from 'react-router-dom'
import './MyGraphicsToken.css'

export default class MyGraphics extends React.Component {
        //Sometimes we need a "blueprint" for creating many objects of the same "type". The way to create an "object type", is to use an object constructor function.
        // Here, we are going to use the constructor function to create Graphics of the same type using each Graphics collective information
        constructor(props) {
            super(props)

            //  The bind() method is going to attach one or more event handlers for selected elements, and specifies a function to run when the event occurs.
            // In this reagrd, we are going to we are going to attach the functions of the Graphics with the help of bind()

            this.deleteGraphics = this.deleteGraphics.bind(this)
        }
        // Next, we are going to connect the Database with the JSON file, so that if any chnages that has been made will change our database record.
        // The controller is trying to fetch the information to update the database record
        deleteGraphics(GraphicsID) {
            fetch('http://localhost:4200/api/Graphics/' + GraphicsID, {
                method: 'delete'
            }).then(response => response.json().then(json => {
                return json
            })
        )
        // The reload() method is used to reload the current document. Here, we are going to reload any chnages that has been made.
        window.location.reload()
    }
    // The purpose of render() method,is to return the HTML. In this reagrd, we are going to return or render the Graphics

    render() {
        return(
           //Finally, we are going to work on rendering the methods. We are going to update the Graphics table, by following three major steps.
            //Initially, we are going to look at the field where changes has been requested to made.
            // Then, we are going to change the value of the field with the new entry, that has been requested.
            //Lastly, we are to assign changes and delete the required field of the specific data.
            <div className="GraphicsContainer">
                {this.props.Graphics.map((Graphics) => (
                    <div className="graphics" key={Graphics.GraphicsID}>
                        <h3>
                            {Graphics.GraphicsTitle}
                        </h3>
                        <div className="graphicsType">
                            <h3>
                                {Graphics.GraphicsType}
                            </h3>
                        </div>
                        <div className="graphicsType">
                            <h3>
                                {Graphics.GraphicsArtist}
                            </h3>
                        </div>
                        <div className="graphicsType">
                            <h3>
                                {Graphics.GraphicsQuality}
                            </h3>
                        </div>
                        <input type="button" className="deleteButton" value="Graphics Delete" onClick={this.deleteGraphics.bind(this,Graphics.GraphicsID)} />
                    </div>
                ))}
            </div>
        )
    }
}