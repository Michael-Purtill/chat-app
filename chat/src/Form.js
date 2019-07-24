import React from 'react';
import axios from 'axios';

class Form extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {message: '',};

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.newMessage = this.newMessage.bind(this);
    }

    newMessage(arr) {
        this.props.msent(arr);
        console.log(arr);
    }

    handleChange(event) {
        this.setState({message: event.target.value});
    }
    
    handleSubmit(event) {
        event.preventDefault();

        const data = {username: this.props.username, message: this.state.message};

        axios.post('http://localhost:5000', data)
        .then(res => console.log(res))
        .catch(err => {console.log(err)});
        
    }

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <textarea value={this.state.message} onChange={this.handleChange}></textarea>
                    <input className="sub" type="submit" value="Submit"></input>
                </form>
                
            </div>
        )
    }
}

export default Form;