import React,{Component} from 'react';
import {
  Button,
  Dropdown, 
  DropdownToggle,
  DropdownMenu, 
  DropdownItem, 
  Table,
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption
  } 
  from 'reactstrap';
import FutsalCourtList from '../components/futsalgrounds/futsalCourtsList'
import TimeDropdown from '../components/timeDropdown'
import DayDropdown from '../components/dayDropdown'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class Bookingpage extends Component{
    constructor(props){
        super(props);

        this.state = {
             dropdownOpenDate: false,
             dropdownOpenTime: false,
             actions:[],
             tvalue:'1',
             startDate: moment(),
             listDisplay:false,
             timeVal:'0',
             dateVal:moment(),
             dropDownValue:""
        };
        this.toggleDate= this.toggleDate.bind(this);
        this.toggleTime= this.toggleTime.bind(this);
        this.changeValue = this.changeValue.bind(this)
        this.handleChangeTime = this.handleChangeTime.bind(this);
        this.handleChangeDate = this.handleChangeDate.bind(this);
        this.submitHandler = this.submitHandler.bind(this);
      }

      submitHandler(e){
        e.preventDefault()
        this.setState({listDisplay:true})
        console.log("changed submit")
        this.setState({
          timeVal:this.state.tvalue,
          dateVal:this.state.startDate,
          listDisplay: true
        })
      }

      handleChangeTime(event) {
        this.setState({tvalue: event.target.value});
      }

      toggleDate(event){
        this.setState({
          dropdownOpenDate: !this.state.dropdownOpenDate
        });
      }
      toggleTime(event){
        this.setState({
          dropdownOpenTime: !this.state.dropdownOpenTime
        });
      }


      changeValue(e){
        this.setState({
            dropdownOpenTime: !this.state.dropdownOpenTime,
            dropDownValue: e.target.innerText
        })
      }

      handleChangeDate(date) {
        this.setState({
          startDate: date
        });
      }

      componentDidMount(){
      }
      
      render() {
        console.log(this.state.tvalue)
        console.log(this.state.startDate)
        return (
          <div>  
            <h1>Select Date And Time</h1>
            <div className="query-submit">
                    <Dropdown isOpen={this.state.dropdownOpenDate} toggle={this.toggleDate}>
                      <DropdownToggle caret>
                        Select Date
                      </DropdownToggle>
                        <DropdownMenu>
                          <DatePicker
                          selected={this.state.startDate}
                          onChange={this.handleChangeDate}
                          />
                        </DropdownMenu>
                    </Dropdown>
                    <Dropdown isOpen= {this.state.dropdownOpenTime} toggle={this.toggleTime}>
                      <DropdownToggle caret>
                        Select Time
                      </DropdownToggle>
                        <DropdownMenu value={this.state.value} onChange={this.handleChangeTime}>
                              <DropdownItem onClick={this.changeValue} value="1">6-7 am</DropdownItem>
                              <DropdownItem value="2">7-8 am</DropdownItem>
                              <DropdownItem value="3">8-9 am</DropdownItem>
                              <DropdownItem value="4">9-10 am</DropdownItem>
                              <DropdownItem value="5">10-11 am</DropdownItem>
                              <DropdownItem value="6">11-12 am</DropdownItem>
                        </DropdownMenu>
                  </Dropdown>
                        <Button color="primary" onClick={this.submitHandler}>Search</Button>
            </div>
            <br/>
  
           {
             this.state.listDisplay&&
               <FutsalCourtList time={this.state.timeVal} date={this.state.dateVal}/> 
           }
             {
             !this.state.listDisplay&&
               <div className="available-futsal-court-container">
                  <div className="afcc-header">
                    <h1>Available Futsal Court By Futplay for Booking</h1>
                  </div>
                    <div className="afcc-slide-container">

                    </div>
               </div>
           }
             
          </div>
        );
      }
    }

export default Bookingpage

