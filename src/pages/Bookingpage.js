import React,{Component} from 'react';
import {ButtonDropdown,Dropdown, DropdownToggle,DropdownMenu, DropdownItem, Table} from 'reactstrap';
import FutsalCourtList from '../components/futsalgrounds/futsalCourtsList'
import TimeDropdown from '../components/timeDropdown'
import DayDropdown from '../components/dayDropdown'

class Bookingpage extends Component{
    constructor(props){
        super(props);
    }
    render(){
      return(
          <div className="bookingpage-main-container">
            <h1>Select Day and Time</h1>
              <div className="bookingpage-dropdowns-container">
                <DayDropdown/>
                <TimeDropdown/>
              </div>
               <br/>
                <FutsalCourtList/> 
          </div>
        );
      }
    }

export default Bookingpage