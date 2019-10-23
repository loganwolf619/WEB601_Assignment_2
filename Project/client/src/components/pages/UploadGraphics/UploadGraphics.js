import React from 'react'
import Title from '../../pageElements/Title';
import {ButtonLoad} from '../../pageElements/Button';
import './UploadGraphics.css';

export default class UploadGraphics extends React.Component {
    // We are going too create a constructor by using props. 
    // Props Get the value of a property for the first element in the set of matched elements or set one or more properties for every matched element.
    constructor() {
        super()
        this.state = {
            objects: {GraphicsTitle: '', GraphicsArtist: '', GraphicsType: '', GraphicsQuality: ''},
            errors: {}
        }
    
        // We are going to use bind.
        // The bind() method creates a new function that, when called, has its this keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
        this.handleAnyChanges = this.handleAnyChanges.bind(this)
        this.uploadGraphics = this.uploadGraphics.bind(this)
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
        uploadGraphics(e) {
            e.preventDefault()
            if (this.validateForm()) {
                let objects = {}
                objects["GraphicsTitle"] = ""
                objects["GraphicsArtist"] = ""
                objects["GraphicsType"] = ""
                objects["GraphicsQuality"] = ""
                this.setState({objects:objects})
              // We are trying to connect our database with the curre
              fetch('http://localhost:4200/api/Users', {
                method: 'post',
                headers: {'Content-Type':'application/json'},
                body: JSON.stringify({
                    "GraphicsTitle": this.GraphicsTitle.value,
                    "GraphicsArtist": this.GraphicsArtist.value,
                    "GraphicsType": this.GraphicsType.value,
                    "GraphicsQuality": this.GraphicsQuality.value,
                })
            })
                // The user has created the account in the website. Then we will receiving a message saying an account has been create.
                console.log("We have uploaded the Graphics")
                alert("Graphics upload has been added")
            }
        }
        // Now, we will validate the Users form by ensuring that each object has been added and no object has been left empty
        uploadGraphics() {
          let objects = this.state.objects
          let errors = {}
          let graphicsUploadFormIsValid = true
          
          if(!objects["GraphicsTitle"]) {
              graphicsUploadFormIsValid = false 
              errors["GraphicsTitle"] = "Please enter your valid Graphics Title"
          }
    
          if(!objects["GraphicsTitle"] !== "Undefined") {
              if(!objects["GraphicsTitle"].match(/^[a-zA-Z]*$/)) {
                  errors["GraphicsTitle"] = "Please Enter only alphabets to enter correct Graphics Title"
              }
          }
          if(!objects["GraphicsArtist"]) {
              graphicsUploadFormIsValid = false 
              errors["GraphicsArtist"] = "Please enter your valid Artist Name"
          }
    
          if(!objects["GraphicsArtist"] !== "Undefined") {
              if(!objects["GraphicsArtist"].match(/^[a-zA-Z]*$/)) {
                  errors["GraphicsArtist"] = "Please Enter only alphabets to enter correct Artist Name"
              }
          }
          if(!objects["GraphicsType"]) {
              graphicsUploadFormIsValid = false 
              errors["GraphicsType"] = "Please enter valid Graphics Type"
          }
    
          if(!objects["GraphicsType"] !== "Undefined") {
            if(!objects["GraphicsType"].match(/^[a-zA-Z]*$/)) {
                errors["GraphicsType"] = "Please Enter only alphabets to enter Graphics Type"
            }
        }

          if(!objects["GraphicsQuality"]) {
              graphicsUploadFormIsValid = false 
              errors["GraphicsQuality"] = "Please enter your valid Password"
          }
          if (typeof objects["GraphicsQuality"] !== "Undefined") {
              if (!objects["GraphicsQuality"].match(/^[a-zA-Z]*$/) && (/^([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]*$/)) {
                  graphicsUploadFormIsValid = false
                  errors["GraphicsQuality"] = "Please enter a valid secured Password"
              }
          }
          this.setState({
              errors: errors
          })
          return graphicsUploadFormIsValid
      }

    render() {
        return (
            <div className="graphicsContainer">
                <div className="uploadGraphics">
                    <Title name="Music" title="Upload" />
                    <form className="graphicsUpload" name="graphicsUpload" onSubmit={this.uploadGraphics}>
                        

                        <div className="topLeftUploadColumn">
                            <label>
                                Graphics Title
                            </label>
                            <br/>
                            <label>
                                Graphics Artist
                            </label>
                        </div>

                        <div className="topLeftColumn">
                            <input type="text" name="GraphicsTitle" id="Title" ref={(ref) => {this.GraphicsTitle=ref}} placeholder="Graphics Title is: " value={this.state.fields.GraphicsTitle} onChange={this.handleAnyChanges} />
                            <div className="errorNotification">
                                {this.state.errors.GraphicsTitle}
                            </div>
                            <br/>
                            <input type="text" name="GraphicsArtist" id="Artist" ref={(ref) => {this.GraphicsArtist=ref}} placeholder="Graphics Artist is: " value={this.state.fields.GraphicsArtist} onChange={this.handleAnyChanges} />
                        </div>

                        <div className="topRightUploadColumn">
                            <label>
                                Graphics Type
                            </label>
                            <br/>
                            <label>
                                Graphics Quality
                            </label>
                        </div>

                        <div className="topRightColumn">
                            <input type="text" name="GraphicsType" id="Type" ref={(ref) => {this.GraphicsType=ref}} placeholder="Graphics Type is: " value={this.state.fields.GraphicsType} onChange={this.handleAnyChanges} />
                            <div className="errorNotification">
                                {this.state.errors.GraphicsTitle}
                            </div>
                            <br/>
                            <input type="text" name="GraphicsQuality" id="Quality" ref={(ref) => {this.GraphicsQuality=ref}} placeholder="Graphics Quality is: " value={this.state.fields.GraphicsQuality} onChange={this.handleAnyChanges} />
                        </div>
                        
                        <br/>
                        <br/>
                        
                        <div className="button hover">
                            <ButtonLoad>
                                Upload Graphics
                            </ButtonLoad>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}

