import React,{Component} from 'react';
import {ButtonDropdown,Dropdown, DropdownToggle,DropdownMenu, DropdownItem, Table} from 'reactstrap';
import FutsalCourtList from '../components/futsalgrounds/futsalCourtsList'

class Bookingpage extends Component{
    constructor(props){
        super(props);

        this.state = {
             dropdownOpen: false,
             actions:[],
             dropDownValue: 'Select Day'
        };
        this.toggle= this.toggle.bind(this);
        this.changeValue = this.changeValue.bind(this)
      }

      toggle(event){
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }

      changeValue(e){
        this.setState({dropDownValue:e.currentTarget.textContent});
        
      }

      componentDidMount(){
      }
      
      render() {
        return (
          <div>  
            <h1>Select Day and Time</h1>  
              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle caret>
                {this.state.dropDownValue}
              </DropdownToggle>
              <DropdownMenu>
                  
                <DropdownItem onClick={this.changeValue}>  Sunday</DropdownItem>
                <DropdownItem onClick={this.changeValue}>  Monday</DropdownItem>
                <DropdownItem onClick={this.changeValue}>  Tuesday</DropdownItem>
                <DropdownItem onClick={this.changeValue}>  Wednesday</DropdownItem>
                <DropdownItem onClick={this.changeValue}>  Thursday</DropdownItem>
                <DropdownItem onClick={this.changeValue}>  Friday</DropdownItem>
                <DropdownItem onClick={this.changeValue}>  Saturday</DropdownItem>
                  
              </DropdownMenu>
              </Dropdown> <br/>
              <FutsalCourtList/> 
          </div>
        );
      }
    }

export default Bookingpage