import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';   
import './App.css';
import Agee from './Agee';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      newDate : '',
      birthday : '2000-06-09',
      showStates : false
     }
     this.changeBirthday = this.changeBirthday.bind(this);
  }
  changeBirthday(){
    console.log(this.state);
    this.setState({ birthday: this.state.newDate });
    console.log(this.state);
    this.setState({
      showStates : true
    })

  }
  render() { 
    return ( <div className='App'>
    
      <Form inline>
      <h1>INPUT YOUR BIRTHDAY HERE !!! :D</h1>

        <FormControl type='date'
        onChange={ event => this.setState({ newDate : event.target.value }) } >

        </FormControl>
        {'                    '}
        <Button onClick={() => this.changeBirthday()}>
        Submmit
      </Button>
      {/* <Age  /> */}
      {
        this.state.showStates ? <Agee date={this.state.birthday} /> : <div></div>
      }
      
      </Form>
      
     

    </div> );
  }
}
 
export default App;