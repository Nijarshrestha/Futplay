import React,{Component} from 'react'
import '../style/pages/test.css'

class Homepage extends Component{
  render(){
    return (
      <div className="homepage-main-container">
          <div className="homepage-top-container">
            <div className="homepage-top-pic-container">
              <img src={require('../images/6797752-hd-football-field-wallpaper.jpg')} width="1000px"/>
          </div>
            <div className="homepage-mid-container">
              <div className="homepage-about-futplay">
                <h1>WELCOME TO FUTPLAY</h1>
                <h2>OUR POWERFUL FUTSAL BOOKING SYSTEM HELPS YOU PLAY MORE</h2>
                <p>Welcome to Futplay. We are a growing global community of futsal enthuiast who are ambitious to make booking courts and slots as painless as possible. We are also committed to making communication between members and futsal courts simple and straightforward.
                    The Futplay booking platform is a powerful booking system that lets courts Administrators manage all aspects of their court's facilities and bookings whilst making it really easy for members to book time slots.
                    We would be delighted to have your players join our global community. Why not try our fully functioning, free (no credit card needed) 60 day trial to see what you think.
                    We're here for you, your courts and your members.
                </p>
              </div>
            </div>
          <div className="homepage-bottom-container">
          </div>
        </div>
      </div>
    )
  }
}
export default Homepage
  
