import React from 'react';
import {BrowserRouter as Router,Route
} from 'react-router-dom';

//Components
import Navbar from './components/layout/Navbar'
import Home from './pages/Dashboard'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'
import Footer from './components/Footer'
import Header from './components/Header'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import App1 from './components/auth/app'
import Bookingpage from './pages/Bookingpage'

//Styles
import './style/default.scss'

class App extends React.Component{
    render(){
        return(
            <Router>
                <div className='App'>
                    <Header/>
                    <Navbar/>
                        <div className="container">
                            <Route path='/' exact={true} component={Home}/>
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
        )   
    }
}
export default App