import React, { Component } from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { checkLogin } from './redux/actions/userActions';
import { push } from 'react-router-redux';
import LoginContainer from './components/auth/LoginContainer';

class LoginChecker extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.check = this.check.bind(this);
  }

  componentDidMount() {
    this.check();
  }

  check() {
    this.props.check();
  }

  componentWillReceiveProps(newProps) {
    if (this.props.location.pathname !== newProps.location.pathname) {
      this.check();
    }
  }

  render() {
    const { loggedIn } = this.props;
    return (
      <div>
        {loggedIn && this.props.children}
        {!loggedIn &&<LoginContainer />}
      </div>
    );
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
