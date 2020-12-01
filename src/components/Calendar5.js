import React, { Component } from 'react';
import Button from 'react-bootstrap/Button'
import {Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import 'moment/locale/nb';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import axios from 'axios'

const localizer = momentLocalizer(moment)
moment.locale('en-GB');


class Calendar5 extends Component {

  

  constructor(props) {
    super(props)

    this.state = {
      show: false,
      cal_events: []
    }

  }

  convertDate = (date) => {
    return moment.utc(date).add(1, "days").toDate()
  }
 
  componentDidMount() {
    

    axios.get('http://localhost:3000/posts')
      .then(response => {
        console.log(response.data);
        let appointments = response.data;
        
        for (let i = 0; i < appointments.length; i++) {

        const dateParse = appointments[i].date.split('/')
       
        const monthIndex = parseInt(dateParse[0]) - 1
  
        appointments[i].start = new Date(parseInt(dateParse[2]), monthIndex, parseInt(dateParse[1]), 1, 0)
        appointments[i].end = new Date(parseInt(dateParse[2]), monthIndex, parseInt(dateParse[1]), 23, 0)
        appointments[i].title = [appointments[i].number]

      
        
        }

        
        this.setState({
          cal_events:appointments
        })
      })
  }


  render() {

    const { cal_events } = this.state

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title"></h1>
        </header>
        <div className='calendar5' style={{ height: 1000 }}>
            
          <Calendar onClick={this.handleClick}
            events={cal_events}
            localizer={localizer}
            step={30} 
            timeslots={8}
            defaultView='month'

            views={['month','week','day']}
            defaultDate={new Date()}
            startAccessor='start'
            endAccessor='end'
          />
        </div>
      </div>
    );
  }
}

export default Calendar5;