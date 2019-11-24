import React, { Component } from 'react'
import './BrowseGraphicsToken.css'


export default class Graphics extends React.Component {
    render() {
        return (


            //Each Graphics will be mapped to the container conatining list of Graphics. Then each Graphics is identified by its own unique GraphicsID
            // Later, each Graphics is displayed with the help of GraphicsID from its container to a display portal
            <div className = "GraphicsContainer" >
                {this.props.Graphics.map((Graphics) => (
                    <div className = "graphics" key={Graphics.GraphicsID}>
                        <h3>
                            {Graphics.GraphicsTitle}
                        </h3>
                        <br/>
                        <div className = 'graphicsArtist'>                           
                            <h3>
                                {Graphics.GraphicsArtist}
                            </h3>
                        </div>
                        <br/>
                        <div className = 'graphicsType'>
                            <h3>
                                {Graphics.GraphicsType}
                            </h3>
                        </div>
                        <br/>
                        <div className = 'graphicsQuality'>
                            <h3>
                                {Graphics.GraphicsQuality}
                            </h3>
                        </div>
                    </div>
                ))}
            </div>
        )    
    }
}
 
