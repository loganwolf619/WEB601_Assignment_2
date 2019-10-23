import React from 'react';
import Title from '../../pageElements/Title';
import MyGraphicsToken from '../../data/MyGraphics/MyGraphicsToken';
import './MyGraphics.css';

export default class MyGraphics extends from React.Component {
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
    render() {
        return(
            <div className="myGraphicsContainer">
                <div className="listGraphicsType">
                    <img src="../..images/1.jpg">
                        G1
                    </img>
                    <img src="../..images/img2.jpg">
                        G2
                    </img>
                    <img src="../..images/2.jpg">
                        G3
                    </img>
                    <img src="../..images/3.jpg">
                        G4
                    </img>
                    <img src="../..images/img1.jpg">
                        G5
                    </img>
                    <img src="../..images/img3.jpg">
                        G6
                    </img>
                    <img src="../..images/img4.jpg">
                        G7
                    </img>
                    <img src="../..images/img5.jpg">
                        G8
                    </img>
                    <img src="../..images/img6.jpg">
                        G9
                    </img>
                    <br/>
                </div>
                <div className="myGraphicsColumn">
                        <Title name="My" title="Graphics" />
                        <MyGraphicsToken Graphics={this.state.Graphics} />
                </div>
            </div>
        )
    }
}