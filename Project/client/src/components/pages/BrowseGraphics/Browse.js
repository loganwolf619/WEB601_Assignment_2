import React from 'react'
import './Browse.css'
import Title from '../../pageElements/Title'

export default class BrowseGraphics extends React.Component {
    // Now we are going to categorize list of all graphics, which will be accumulated from the database
    render() {
        return(
            <div className="graphicsList">
                <div className="formGroup">
                    <h2>List of Graphics: > </h2>
                </div>
                <div className="container">
                    <div className="box">
                        <h3>Digital Illustration</h3>
                    </div>
                    <div className="box">
                        <h3>Chrome Photography</h3>
                    </div>
                    <div className="box">
                        <h3>Painting</h3>
                    </div>
                </div>
                <div className="container">
                    <div className="box">
                        <h3>Animation</h3>
                    </div>
                    <div className="box">
                        <h3>Cartoon</h3>
                    </div>
                    <div className="box">
                        <h3>Landscape</h3>
                    </div>
                </div>
                <div className="container">
                    <div className="box">
                        <h3>Sketch</h3>
                    </div>
                    <div className="box">
                        <h3>Potrait</h3>
                    </div>
                    <div className="box">
                        <h3>Animal Kingdom</h3>
                    </div>
                </div>
                <div className="container">
                    <div className="box">
                        <h3>Plant Kingdom</h3>
                    </div>
                    <div className="box">
                        <h3>Filter</h3>
                    </div>
                    <div className="box">
                        <h3>Desgins</h3>
                    </div>
                </div>
                <div className="ColumnContent">
                    <Title name="Browse" title="Graphics" />
                </div>                   
            </div>
        )
    }
}


