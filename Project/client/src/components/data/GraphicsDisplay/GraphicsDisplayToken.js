import React from 'react'
import './GraphicsDisplayToken.css'

export default class GraphicsDisplay extends React.Component {
    render() {
        return(
            //Each User will be mapped to the container conatining list of Users. Then each User is identified by its own unique UsersID
            // Later, each User is displayed with the help of UsersID from its container to a display portal
            <div className="graphicsDisplayContainer">
                {this.props.Graphics.map((GraphicsDisplay) => (
                    <div className="graphics" key={GraphicsDisplay.GraaphicsID}>
                        <h3>
                            {GraphicsDisplay.GraphicsTitle}
                        </h3>
                        <div className="graphicsDisplayArtist">
                            <img src='../../images/hungergame.jpg' alt="graphicsImage" className="displayImage" />
                            <input className="graphicsDisplayViewer" type="test" />
                            <div className="graphicsDisplayType">
                                <h3>
                                    {GraphicsDisplay.GraphicsType}
                                </h3>
                            </div>
                            <div className="graphicsDisplayArtist">
                                <h3>
                                    {GraphicsDisplay.GraphicsArtist}
                                </h3>
                            </div>
                            <div className="graphicsDisplayQuality">
                                <h3>
                                    {GraphicsDisplay.GraphicsQuality}
                                </h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        )
    }
}