import React , {Component} from 'react';
import './App.css';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput'

class App extends Component {
  state ={
    username : ['Chaman','Naman','Yousuf']
  }

  userNameChangeHandler=(event)=>{
    this.setState({username: ['Chaman','Naman',event.target.value]});
  }

  render()
  {
    return (
      <div className="App">
        <UserInput valueChange={this.userNameChangeHandler}/>
        <br/>
        <UserOutput userName={this.state.username[0]}/>
        <UserOutput userName={this.state.username[1]}/>
        <UserOutput userName={this.state.username[2]}/>
      </div>
    );
    }
}

export default App;
