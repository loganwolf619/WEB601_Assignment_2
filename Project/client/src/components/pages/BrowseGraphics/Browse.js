import React from 'react'
import './Browse.css'
import Title from '../../pageElements/Title'

export default class BrowseGraphics extends React.Component {
    constructor(props) {
        super(props)
            this.state = ({
                fetching: false,
                graphics: []
            })
    }

    componentDidMount() {
        this.getSongs()
    }

  
    getSongs() {
        fetch('http://localhost:4200/api/graphics')
		.then(res => res.json())
		.then(data => { 
			if(data.code === '404') {
				this.setState({
					fetching: false,
				})
			} else {
                this.setState({
                fetching: true,
                graphics: data, 
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
           <div className='browseGraphicsContainer'>
               <div className="columnContent">
                   <h3>
                       Graphics Type
                   </h3>
                   <ul>
                       <br/>
                       <li>Visual identity graphic design</li>
                       <br/>
                       <li>Marketing and advertising graphic design</li>
                       <br/>
                       <li> User interface graphic design</li>
                       <br/>
                       <li>Publication graphic design</li>
                       <br/>
                       <li>Packaging graphic design</li>
                       <br/>
                       <li>Motion graphic design</li>
                       <br/>
                       <li>Environmental graphic design</li>
                       <br/>
                       <li>Art and illustration for graphic design</li>
                   </ul>
               </div>
               <div className="groupContent">
                   <Title name="Graphics" title="Arts and Designs"></Title>
                   <BrowseGraphics graphics={this.state.graphics}></BrowseGraphics>
               </div>
           </div>
        )
    }
}


