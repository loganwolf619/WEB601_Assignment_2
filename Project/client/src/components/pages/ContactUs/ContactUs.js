import React, { Component } from 'react'

export class MesssageUs extends Component {
    render() {
        return (
            <div>
                <form>
                <div className="form-group">
                    <label for="exampleInputEmail1">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group">
                    <label for="formGroupExampleInput">Full name</label>
                    <input type="text" class="form-control" id="formGroupExampleInput" placeholder="Example input" />
                </div>
                <div className="form-group">
                    <label for="exampleFormControlTextarea1">Your Inquiry</label>
                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                </div>
                <div class="form-check">
                    <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                    <label className="form-check-label" for="exampleCheck1">Send Your Message</label>
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
                </form>
            </div>
        )
    }
}

export default MesssageUs;