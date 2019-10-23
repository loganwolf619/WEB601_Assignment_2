import React, { Component } from 'react'
import './BrowseGraphics/BrowseGraphicsToken.css'


export default class Graphics extends React.Component {
    render() {
        return(
            //Each Graphics will be mapped to the container conatining list of Graphics. Then each Graphics is identified by its own unique GraphicsID
            // Later, each Graphics is displayed with the help of GraphicsID from its container to a display portal

            <div className="GraphicsContainer">
                {this.props.Graphics.map((Graphics) => (
                    <div className="graphics" key={Graphics.GraphicsID}>
                        <h1>{Graphics.GrapphicsTitle}</h1>
                        <div id="blueimp-gallery" className="blueimp-gallery blueimp-gallery-controls">
                            <div className="slides"></div>
                            <h3 className="title"></h3>
                            <a className="prev">‹</a>
                            <a className="next">›</a>
                            <a className="close">×</a>
                            <a className="play-pause"></a>
                            <ol className="indicator"></ol>
                        </div>
                        <div className="graphicsType">
                            <h3>
                                {Graphics.GraphicsType}
                            </h3>
                        </div>
                        <div className="graphicsArtist">
                            <h3>
                                {Graphics.GraphicsArtist}
                            </h3>
                        </div>
                        <div className="graphicsQuality">
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
 
