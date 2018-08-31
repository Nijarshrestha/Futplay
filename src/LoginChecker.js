import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { checkLogin } from './redux/actions/userActions';
import { push } from 'connected-react-router';

class LoginChecker extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.change= this.change.bind(this);
  }

  componentDidMount() {
    this.props.check();
    this.change();
  }

  change() {
    if (!this.props.loggedIn) {
      this.props.push('/login');
    }
  }
  componentWillReceiveProps(newProps) {
    if (!newProps.loggedIn) {
      this.props.push('/login');
    }
    if(this.props.location.pathname!==newProps.location.pathname) {
      if(!newProps.loggedIn) {
      this.props.push('/login');
      }
    }
  }

  render() {
    console.log(this.props);
    return <div>{this.props.children}</div>;
  }
}
const mapDispatchToProps = dispatch => {
  return {
    check: bindActionCreators(checkLogin, dispatch),
    push: bindActionCreators(push, dispatch)
  };
};

const mapStateToProps = state => ({
  loggedIn: state.login.loggedIn,
  location: state.router.location
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginChecker);
