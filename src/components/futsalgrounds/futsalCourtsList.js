import React, {Component} from 'react';
import {Table} from 'reactstrap'

class FutsalCourtList extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            // <div className="fcl-main-container">
            //     <div className={`mainlist ${props.className}`}>
            //         <ul className ='list-group'>
            //             {props.futsalcourtlist.map((room,idx)=>
            //                 <li className="list-group-item" key={idx} onClick={props.handleClick.bind(undefined, idx)}>
            //                     <a href="#">{court.name}</a>
            //                 </li>)}
            //         </ul>        
            //     </div>
            // </div>
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
        
      </Table>
            </div>
        )
    }
}
export default FutsalCourtList