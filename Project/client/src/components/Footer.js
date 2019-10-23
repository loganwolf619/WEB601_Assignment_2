import React, {Component} from 'react'
import './Footer.css'

export default class Footer extends Component {
    render() {
        return(
            <div className="footerContainer">
                <div className="credits">
                    Credit Icons dedicated 
                    <span class="glyphicon glyphicon-icon" aria-hidden="true">
                        <a href="https://www.flaticon.com/packs/general-arts-27" title="Freepik">General Arts from</a>
                        <a href="https://www.flaticon.com/" title="Flaticons"> Licensed by </a>
                        <a href="https://www.creativecommons.org/licenses/by/3.0" title="Creative Commons"> Creative Commons by 3.0</a>
                    </span>
                    
                </div>
            </div>
        )
    }
}