import React,{Component} from 'react';
import { Route,Switch } from 'react-router-dom';
import { Provider } from 'react-redux';
//Components
import Navbar from './components/layout/Navbar';
import Homepage from './pages/Homepage';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import Header from './components/Header';
import Login from './components/auth/LoginContainer';
import Register from './components/auth/Register';
import App1 from './components/auth/app';
import Bookingpage from './pages/Bookingpage';
import FutsalGround from './pages/FutsalGrounds';
import UserDashboard from './pages/UserDashboard';

//Styles
import './style/default.scss';
import store, { history } from './redux/store';
import { ConnectedRouter } from 'connected-react-router';
import LoginChecker from './LoginChecker';


class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
            <div className="App">
              <Navbar/>
              <div className="">
              <Switch>
                <Route exact path="/"   render={() =><LoginChecker><Homepage {...this.props}/></LoginChecker>}/>
                <Route exact path="/aboutus"  render={() =><LoginChecker><AboutUs {...this.props}/></LoginChecker>} />
                <Route exact path="/login"  component={Login} />
                <Route exact path="/register"  component={Register}  />
                <Route exact path="/contact"  render={() =><LoginChecker><Contact {...this.props}/></LoginChecker>} />
                <Route exact path="/test" render={() =><LoginChecker><App1 {...this.props}/></LoginChecker>} />
                <Route exact path="/bookingpage"  render={() =><LoginChecker><Bookingpage {...this.props}/></LoginChecker>} />
                <Route exact path="/futsalgrounds"  render={() =><LoginChecker><FutsalGround {...this.props}/></LoginChecker>} />
                <Route exact path="/dashboard"  render={() =><LoginChecker><UserDashboard {...this.props}/></LoginChecker>} />
                </Switch>
              </div>
            </div>
        </ConnectedRouter>
      </Provider>
    );
  }
}
export default App;

// import * as actionCreator from './';
