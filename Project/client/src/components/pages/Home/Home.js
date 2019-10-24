import React from 'react';
import {Link} from 'react-router-dom';
import {ButtonContainer} from '../../pageElements/Button';
import './Home.css';
import GraphicsDisplayToken from '../../data/GraphicsDisplay/GraphicsDisplayToken';
//import Footer from '../../Footer';


export default class Home extends React.Component {
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
    // Now we are going to display all the Graphics that has been exported from the Database and distributed in the Graphics Container
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
            <div className="homePageWrapper">

                <div className="container">
                    <div className="subContainer">
                        <h3>Website Purpose</h3>
                    </div>
                    <div className="uploadGraphics">    
                        <Link to="/UploadGraphics">
                            <ButtonContainer>
                                Upload Graphics
                            </ButtonContainer>
                        </Link>
                    </div>
                </div>
                
                <div className="homeStructure">
                    <div>
                        <Link to="/Register">
                            <ButtonContainer>
                                Register
                            </ButtonContainer>
                        </Link>
                    </div>
                </div>
            </div>
        )
    }
}
