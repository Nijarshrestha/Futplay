import React,{Component} from 'react';

import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { userlogout } from '../../redux/actions/userActions';
import { Confirm, Image,Icon,Menu,Dropdown,Container } from 'semantic-ui-react';
import { push } from 'react-router-redux';

class Nav extends Component{
  constructor(props) {
    super(props);
    this.state = { logoutmodalopen: false };
    this.logOut = this.logOut.bind(this);

  }

  logOut() {
    this.props.userlogout();
  }
  render() {
    const { loggedIn } = this.props;
    return(<div className="desktopnav">
       <Menu fixed='top' inverted>
      <Container>
        <Menu.Item href="/" header className="logoimage">
        <Image src={require('./../../images/ball.png')} size="mini"/>
          Futplay Nepal
        </Menu.Item>
        <Menu.Item href="/aboutus">About</Menu.Item>
        <Menu.Item href="/contact">Contact</Menu.Item>
        <Menu.Item href="/dashboard">Dashboard</Menu.Item>
        <Dropdown item icon='power'>
          <Dropdown.Menu>
           
            {!loggedIn &&<Dropdown.Item onClick={()=>this.props.push('/login')}><Icon name="sign in"/>Log In</Dropdown.Item>}
            {loggedIn &&<Dropdown.Item onClick={() => this.setState({ logoutmodalopen: true })}><Icon name="sign out"/>Log Out</Dropdown.Item>}
           
          </Dropdown.Menu>
        </Dropdown>
       
      </Container>
    </Menu>
    <Confirm open={this.state.logoutmodalopen}
        basic
        size="mini"
       header='Are you sure you want to log out?'
       content=''
        onCancel={() => this.setState({ logoutmodalopen: false })}
         onConfirm={() => { this.setState({ logoutmodalopen: false }); this.logOut() }} />
    </div>)
  }
}
const mapDispatchToProps = dispatch => {
  return {

    userlogout: bindActionCreators(userlogout, dispatch),
    push:bindActionCreators(push,dispatch)
    
  };
};
const mapStateToProps = state => ({
  loggedIn: state.login.loggedIn
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Nav);