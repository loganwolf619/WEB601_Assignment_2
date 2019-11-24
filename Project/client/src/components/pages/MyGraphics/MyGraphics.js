import React from 'react';
import Title from '../../pageElements/Title';
import MyGraphicsToken from '../../data/MyGraphics/MyGraphicsToken';
import './MyGraphics.css';

export default class MyGraphics extends React.Component {
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
        fetch('http://localhost:4200/api/Graphics')
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
    render() {
        return(
            <div className="myGraphicsContainer">
                <div className="listGraphicsType">                    
                    <br/>
                    <h3>List of Graphics type</h3>
                    <ul>
                        <li>Graphics Type 1</li>
                        <br/>
                        <li>Graphics Type 2</li>
                        <br/>
                        <li>Graphics Type 3</li>
                        <br/>
                        <li>Graphics Type 4</li>
                        <br/>
                        <li>Graphics Type 5</li>
                        <br/>
                        <li>Graphics Type 6</li>
                        <br/>
                        <li>Graphics Type 7</li>
                    </ul>
                </div>
                <div className="myGraphicsColumn">
                        <Title name="My" title="Graphics" />
                        <MyGraphicsToken Graphics={this.state.Graphics} />
                </div>
            </div>
        )
    }
}