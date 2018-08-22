import React,{Component} from 'react';
import {Dropdown, DropdownToggle,DropdownMenu, DropdownItem, Table} from 'reactstrap';
import FutsalCourtList from '../components/futsalgrounds/futsalCourtsList'

class Bookingpage extends Component{
    constructor(props){
        super(props);

        this.toggle= this.toggle.bind(this);
        this.state = {
          dropdownOpen: false
        };
      }
      toggle (){
        this.setState(prevState=>({
          dropdownOpen: !prevState.dropdownOpen
        }));
      }
      
      render() {
        return (
          <div>  
            <h1>Futsal Courts</h1>  
              <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
              <DropdownToggle caret>
                Select a futsal ground
              </DropdownToggle>
              <DropdownMenu>
                <DropdownItem header>Chaitya Futsal ground</DropdownItem>
                <DropdownItem disabled>Prismatic Futsal ground</DropdownItem>
                <DropdownItem></DropdownItem>
                <DropdownItem></DropdownItem>
              </DropdownMenu>
              </Dropdown> <br/>
              <FutsalCourtList/> 
          </div>
        );
      }
    }
    

    
export default Bookingpage