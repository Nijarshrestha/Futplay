import React from 'react';
import {SocialIcon} from 'react-social-icons';

class Header extends React.Component{
    render(){
        return(
            <header>
                <div className="main-container">
                    <div className="container">
                        <div className="title">
                            
                        </div>
                            <div className="media-links">
                               <SocialIcon url="http://facebook.com" color="white"/>
                                <SocialIcon url="http://twitter.com" color="white"/>
                            </div>  
                    </div>
                </div>
            </header>
        )
    }
}

export default Header