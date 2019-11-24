import React from 'react'
import {Link} from 'react-router-dom'
import './EditGraphicsToken.css'

export default class MyGraphics extends React.Component {
    //Sometimes we need a "blueprint" for creating many fields of the same "type". The way to create an "object type", is to use an object constructor function.
    // Here, we are going to use the constructor function to create Graphics of the same type using each Graphics collective information

    constructor() {
        super()
        this.state = {
            fields: {GraphicsTitle: '', GraphicsArtist: '', GraphicsType: '', GraphicsQuality: '', GraphicsID: ''},
            errors: {}
        }

        
    //  The bind() method is going to attach one or more event handlers for selected elements, and specifies a function to run when the event occurs.
    // In this reagrd, we are going to we are going to attach the functions of the Graphics with the help of bind()

    this.handleChange = this.handleChange.bind(this)
    this.editGraphicsChanges = this.editGraphicsChanges.bind(this)
    }

    // Now, we are going to apply updates to any properties based on any changes made by the user using GUI
    handleChange(e) {
        let fields = this.state.fields
        fields[e.target.name] = e.target.value
        this.setState({
            fields
        })
    }
    // Next, we are going to connect the Database with the JSON file, so that if any chnages that has been made will change our database record.
    // The controller is trying to fetch the information to update the database record

    editGraphicsChanges(GraphicsID) {
        fetch('https://localhost:4200/api/Graphics/' + GraphicsID, {
            method: 'put',
            headers: JSON.stringify({
                "GraphicsTitle": this.GraphicsTitle.value,
                "GraphicsArtist": this.GraphicsArtist.value,
                "GraphicsType": this.GraphicsType.value,
                "GraphicsQuality": this.GraphicsQuality.value,
            })
        })
        console.log("The Graphics has been Edited")
        // To let us know if the update has been successful, we are going to get a message
        alert("Grahics has been updated")
    }

    //Finally, we are going to work on rendering the methods. We are going to update the Graphics table, by following three major steps.
    //Initially, we are going to look at the field where changes has been requested to made.
    // Then, we are going to change the value of the field with the new entry, that has been requested.
    //Lastly, we are to assign changes and update the required field of the specific data.

    render() {
        return(
            <div className="GraphicsContainer">
                {this.props.Graphics.map((Graphics) => (
                    <div className="Graphics" key={Graphics.GraphicsID}>
                        <h3>{Graphics.GraphicsTitle}</h3>
                        <input type="text" name="GraphicsTitle" id="GraphicsTitle" ref={(ref) => {this.GraphicsTitle = ref}} value={this.state.fields.GraphicsTitle} onChange={this.handleChange} />
                        
                        <h3>{Graphics.GraphicsArtist}</h3>
                        <input type="text" name="GraphicsArtist" id="GraphicsArtist" ref={(ref) => {this.GraphicsArtist = ref}} value={this.state.fields.GraphicsTitle} onChange={this.handleChange} />

                        <h3>{Graphics.GraphicsType}</h3>
                        <input type="text" name="GraphicsType" id="GraphicsType" ref={(ref) => {this.GraphicsType = ref}} value={this.state.fields.GraphicsType} onChange={this.handleChange} />

                        <h3>{Graphics.GraphicsQuality}</h3>
                        <input type="text" name="GraphicsQuality" id="GraphicsQuality" ref={(ref) => {this.GraphicsQuality = ref}} value={this.state.fields.GraphicsQuality} onChange={this.handleChange} />
                        
                        <br/>
                        <br/>

                        <input type="Submit" className="editButton" value="Edit Graphics" onClick={this.editGraphicsChanges.bind(this,Graphics.GraphicsID)}/>
                        <Link to="MyGraphics">
                            <input type="button" className="cancelButton" value="Cancel Editing" />
                        </Link>

                    </div>
                 ))}
            </div>
        )
    }
}