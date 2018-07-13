import React from 'react';
import {Link} from 'react-router-dom'
 
class Header extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <header>
                <div className="logo">
                    Futplay
                </div>
                    <nav>
                        <ul>
                            <li className="first">
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/aboutus">About Us</Link> 
                            </li>
                            <li className="last">
                                <Link to="/contacts">Contacts</Link>
                            </li>
                        </ul>
                    </nav>
            </header>
        )
    }
}
export default Header