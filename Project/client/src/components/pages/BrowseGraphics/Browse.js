import React from 'react'
import './BrowseGraphics.css'
import BrowseGraphicsToken from '../../data/BrowseGraphics'
import Title from './../pageElements/Title'

export default class BrowseGraphics extends React.Component {
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

    // Now we are going to get all the Graphics from the database and arrange them in a conatiner that contains bunch of Graphics
    getGraphics() {
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
                        Graphics: data,
                    })
                }
            })
            .catch(error => {
                console.log(error)
            })
    }

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
                    <BrowseGraphicsToken Graphics={this.state.Graphics} />
                </div>                   
            </div>
        )
    }
}

export default Portfolio;
