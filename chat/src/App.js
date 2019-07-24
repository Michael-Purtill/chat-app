import React from 'react';
import Message from './Message';
import Form from './Form';
import SelectUser from './SelectUser';
import axios from 'axios';

import './styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: 'user1', messages: [{message: '', username: ''}]};
    this.setUser = this.setUser.bind(this);
    this.messageSent = this.messageSent.bind(this);
    this.updt = this.updt.bind(this);
    this.input = React.createRef();

  }
  
  componentDidMount()
  {
    setInterval(() => {this.updt()}, 1000);
  }

  updt()
  {
    this.setState({message: axios.get('http://localhost:5000').then(res => this.messageSent(res.data))})
  }

  setUser(uname)
  {
    this.setState({username: uname});
  }

  messageSent(arr)
  {
    this.setState({messages: arr});
    console.log(this.state.messages);
  }

  render()
  {
    return (
      <div>
        <div className="messages">
          {this.state.messages.map(m => <Message usr={m.username} msg={m.message} />)}
        </div>
        <SelectUser text="which user are you?" onChange={this.setUser} />
        <Form username={this.state.username} msent={this.messageSent} />
      </div>
    );
  }
}

export default App;
