import React from 'react';
import {BrowserRouter as Router,Route
} from 'react-router-dom';

//Components
import Navbar from './components/layout/Navbar'
import Home from './pages/Dashboard'
import AboutUs from './pages/AboutUs'
import Contact from './pages/Contact'

//Styles
import './style/default.scss'

class App extends React.Component{
    render(){
        return(
            <Router>
                <div className='App'>
                    <Navbar/>
                        <div className="container">
                            <Route path='/' exact={true} component={Home}/>
                            <Route path='/aboutus' exact={true} component={AboutUs}/>
                            <Route path='/contact' exact={true} component={Contact}/>
                        </div>
                </div>
            </Router>
        )   
    }
}
export default App