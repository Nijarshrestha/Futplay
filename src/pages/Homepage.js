import React, { Component } from 'react';
import { Container, Divider, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

class Homepage extends Component {
  render() {
    return (
      <div style={{ zIndex: '100000' }}>
        <video autoPlay muted loop id="myVideo">
          <source src={require('../images/vid.mp4')} type="video/mp4" />
          Your browser does not support HTML5 video.
        </video>

        <div className="fixcontent thin">
          <Container textAlign="justified" >
            <Divider />
            <h1>WELCOME TO FUTPLAY</h1>
            <Divider />

            <h2>OUR POWERFUL FUTSAL BOOKING SYSTEM HELPS YOU PLAY MORE</h2>
            <p className="thin">
              Welcome to Futplay. We are a growing global community of futsal enthuiast who are ambitious to make
              booking courts and slots as painless as possible. We are also committed to making communication between
              members and futsal courts simple and straightforward. The Futplay booking platform is a powerful booking
              system that lets courts Administrators manage all aspects of their court's facilities and bookings whilst
              making it really easy for members to book time slots. We would be delighted to have your players join our
              global community. Why not try our fully functioning, free (no credit card needed) 60 day trial to see what
              you think. We're here for you, your courts and your members.{' '}
            </p>
            <div style={{ position: 'fixed', width: '100%', height: ' 100%' }} />
          </Container>
          <Container textAlign="center">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <Link to="/futsalgrounds">
              <Button color="black" basic inverted size="massive" icon labelPosition="right">
                Explore Grounds
                <Icon name="right chevron" />
              </Button>
            </Link>
          </Container>
          <br />
          <br />
          <br />
        </div>
        <div className="desktoponly"/>
      </div>
    );
  }
}

export default Homepage;
