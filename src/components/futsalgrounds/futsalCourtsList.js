import React, {Component} from 'react';
import {Table, Button,Alert} from 'reactstrap';
import moment from 'moment';
// import 'react-datepicker/dist/react-datepicker.css'
import DatePicker from 'react-datepicker';
import PopUp from '../popup'

class FutsalCourtList extends Component{
    constructor(props){
        super(props);
        this.state = {
            startDate: moment(),
        };
        this.handleChangeDate = this.handleChangeDate.bind(this);
        
    }

    handleChangeDate(Date){
        this.setState({
            startDate:date
        });
    }

    render(){
        return(
            <div className="fc-booking-table">
                <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>Date</th>
            <th>Day</th>
            <th>Time</th>
            <th>Availabilty</th>
            <th>Booking Option</th>
          </tr>
        </thead>
        <tbody>
            <tr>
                <th scope="row">1</th>
                <td><input type="date"/></td>
                <td>Monday</td>
                <td>6:00-7:00</td>
                <td>Yes</td>
                <td><PopUp/></td>
            </tr>
        </tbody>
      </Table>
            </div>
        )
    }
}
export default FutsalCourtList