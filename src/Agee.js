import React, { Component } from 'react';
import partyProps from './party-popper.jpg';
import './App.css';


class Agee extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    timeSince(date){
        let today = new Date().getTime();
        let other_date = new Date(date).getTime();
        let difference = Math.abs(today - other_date);

        let days = Math.floor(difference / (1000*3600*24));
        let years = Math.floor(days/365);
        days -= years*365;
        let months = Math.floor(days/365);
        days-= months*31;

        return `${years} years, ${months} months, and ${days} days`
    }
    render() { 
        
        return ( <div>
        {/* <h1>heelo</h1> */}
            <h3>{this.props.date}</h3>
            <h4>congrats on {this.timeSince(this.props.date)}!</h4>
            <img src={partyProps} alt='party-popper' className='party-popper' />
        </div> );
    }
}
 
export default Agee;