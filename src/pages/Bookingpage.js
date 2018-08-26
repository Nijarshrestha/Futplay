import React,{Component} from 'react';
import {ButtonDropdown,Dropdown, DropdownToggle,DropdownMenu, DropdownItem, Table} from 'reactstrap';
import FutsalCourtList from '../components/futsalgrounds/futsalCourtsList'
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

class Bookingpage extends Component{
    constructor(props){
        super(props);

        this.state = {
             dropdownOpen: false,
             actions:[],
             dropDownValue: 'Select Day',
             tvalue:'1',
             startDate: moment(),
             listDisplay:false,
             timeVal:'0',
             dateVal:moment(),
        };
        this.toggle= this.toggle.bind(this);
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

      toggle(event){
        this.setState({
          dropdownOpen: !this.state.dropdownOpen
        });
      }

      changeValue(e){
        this.setState({dropDownValue:e.currentTarget.textContent});
        
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
            <div className="query-submit">
                  <div >Select Date</div>
                  <DatePicker
                  selected={this.state.startDate}
                  onChange={this.handleChangeDate}
                  />
                  <div >Select Time</div>
                  <select value={this.state.value} onChange={this.handleChangeTime}>
                      <option value="0">Select time:</option>
                      <option value="1">6-7 am</option>
                      <option value="2">7-8 am</option>
                      <option value="3">8-9 am</option>
                      <option value="4">9-10 am</option>
                      <option value="5">10-11 am</option>
                      <option value="6">11-12 am</option>
                  </select>
                  <button onClick={this.submitHandler}>Submit</button>
            </div>
  
           {
             this.state.listDisplay&&
               <FutsalCourtList time={this.state.timeVal} date={this.state.dateVal}/> 
           }
             {
             !this.state.listDisplay&&
               <div>aaa</div>
           }
             
          </div>
        );
      }
    }

export default Bookingpage

