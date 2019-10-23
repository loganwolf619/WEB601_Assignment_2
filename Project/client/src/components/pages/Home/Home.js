import React from 'react';
import {Link} from 'react-router-dom';
import Button from '../../pageElements/Button';
import '.Home.css';
import GraphicsDisplayToken from '../../data/GraphicsDisplay';
import Footer from '../../Footer';
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
        <div classNameName="websiteHome">
            <div className="header">
                <h1>Apex Shutterbug</h1>
                <p>A <b>responsive</b> website created by me.</p>
            </div>
          
            <div className="navbar">
                <a href="#" className="active">Home</a>
                <a href="#">Link</a>
                <a href="#">Link</a>
                <a href="#" className="right">Link</a>
            </div>
          
            <div className="row">
                <div className="side">
                    <h2>About Me</h2>
                    <h5>Photo of me:</h5>
                    <div className="fakeimg" style="height:200px;">Image</div>
                    <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
                    <h3>More Text</h3>
                    <p>Lorem ipsum dolor sit ame.</p>
                    <div className="fakeimg" style="height:60px;">Image</div><br />
                    <div className="fakeimg" style="height:60px;">Image</div><br/>
                    <div className="fakeimg" style="height:60px;">Image</div>
                </div>
                    <div classNameName="main">
                        <h2>TITLE HEADING</h2>
                        <h5>Title description, Dec 7, 2017</h5>
                        <div className="fakeimg" style="height:200px;">Image</div>
                        <p>Some text..</p>
                        <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                        <br/>
                        <h2>TITLE HEADING</h2>
                        <h5>Title description, Sep 2, 2017</h5>
                        <div className="fakeimg" style="height:200px;">Image</div>
                        <p>Some text..</p>
                        <p>Sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    </div>
            </div>
            <div className="uploadGraphics">
                <Link to="/UploadGraphics">
                    <Button>
                        UploadGraphics
                    </Button>
                </Link>
            </div>
            <div className="homePage">
                <div>
                    <img src='../../icons/searchPNG' alt="searchBarImg" className="searchBar"></img>
                </div>
                <div className="graphicsDisplay">
                    <h2>Added Graphics: </h2>
                    <GraphicsDisplayToken Graphics={this.state.Graphics} />
                </div>
            </div>
            <div className="footer">
            <Link to="/FooteAr">
                <h2>Footer</h2>
            </Link>
            </div>
          </div>
        )
    }
}
