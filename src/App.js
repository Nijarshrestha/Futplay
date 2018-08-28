import React from 'react';
import {BrowserRouter as Router,Route
} from 'react-router-dom';
import {Provider} from 'react-redux'

//Components
import Navbar from './components/layout/Navbar'
import Homepage from './pages/Homepage'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Login from './components/auth/LoginContainer'
import Register from './components/auth/Register'
import App1 from './components/auth/app'
import Bookingpage from './pages/Bookingpage'


//Styles
import './style/default.scss'
import store from './redux/store';

class App extends React.Component{

    render(){
        return(
            <Provider store={store}>
            <Router>
                <div className='App'>
                    <Header/>
                    <Navbar/>
                        <div className="container">
                            <Route path='/' exact={true} component={Homepage}/>
                            <Route path='/aboutus' exact={true} component={AboutUs}/>       
                            <Route path='/login' exact={true} component={Login}/>
                            <Route path='/register' exact={true} component={Register}/>
                            <Route path='/contact' exact={true} component={Contact}/>
                            <Route path='/test' exact={true} component={App1}/>
                            <Route path='/bookingpage' exact={true} component={Bookingpage}/>
                        </div>
                    <Footer/>
                </div>
            </Router>
            </Provider>
        )   
    }
}
export default App