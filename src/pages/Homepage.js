import React, {Component} from 'react'
import { Container, Divider, Button, Icon } from 'semantic-ui-react'
import {Link} from 'react-router-dom'

class Homepage extends Component {

  render(){
    return(
      <div> 
        <Container textAlign='justified'>
          <Divider />
          <h1>WELCOME TO FUTPLAY</h1> 
          <h2>OUR POWERFUL FUTSAL BOOKING SYSTEM HELPS YOU PLAY MORE</h2> 
          <p>Welcome to Futplay. We are a growing global community of futsal enthuiast who are ambitious to make booking courts and slots as painless as possible. We are also committed to making communication between members and futsal courts simple and straightforward. The Futplay booking platform is a powerful booking system that lets courts Administrators manage all aspects of their court's facilities and bookings whilst making it really easy for members to book time slots. We would be delighted to have your players join our global community. Why not try our fully functioning, free (no credit card needed) 60 day trial to see what you think. We're here for you, your courts and your members. </p>
          
        </Container>
        <Container textAlign="center">
        <br/><br/><br/><br/><br/><br/>
          <Link to="/futsalgrounds">
          <Button color="black" size="massive" icon labelPosition='right'>Explore Grounds
          <Icon name="right chevron"/></Button>
          </Link>
        </Container>
        <br/><br/><br/>
      </div>
    )
  }
}

export default Homepage