import React,{Component} from 'react';

import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { checkLogin } from './redux/actions/userActions';

class LoginChecker extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.check();
  }

  componentWillReceiveProps(newProps) {
    // if (
    //   newProps.location.pathname !== this.props.location.pathname &&
    //   newProps.location.pathname !== '/' &&
    //   !newProps.loggedIn
    // ) {
    //   this.props.history.push('/login');
    // }
  }

  render() {
    return <div>{this.props.children}</div>;
  }
}
const mapDispatchToProps = dispatch => {
  return {
    check: bindActionCreators(checkLogin, dispatch)
  };
};

const mapStateToProps = state => ({
  loggedIn: state.login.loggedIn
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginChecker);
