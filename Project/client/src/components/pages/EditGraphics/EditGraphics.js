import React from 'react';
import Title from '../../pageElements/Title';
import EditGraphicsToken from '../../data/EditGraphics/EditGraphicsToken'
import './EditGraphics.css'

export default class EditGraphics extends React.Component {
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
        return (
        <div>
            <div className="graphicsContainer">
                <Title name="Editing" title="Graphics" />
                <div className="editGraphicsContent">
                    <EditGraphicsToken Graphics={this.state.Graphics} />
                </div>
            </div>
            <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                <div className="carousel-inner">
                    <div className="carousel-item active">
                    <img className="d-block w-100" src="./1.jpg"  alt="First slide"></img>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src="./2.jpg"  alt="Second slide"></img>
                    </div>
                    <div className="carousel-item">
                    <img className="d-block w-100" src="./3.jpg"  alt="Third slide"></img>
                    </div> 
                </div>
                <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="sr-only">Previous</span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="sr-only">Next</span>
                </a>
                </div>
        </div>

        )
    }
}
