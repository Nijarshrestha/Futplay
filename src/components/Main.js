import React from 'react'
import Header from './Header'
import Footer from './Footer'


class Main extends React.Component{
    render(){
        return(
            <div>
                <Header/>
                <Footer copyright="@2018"/>
           </div>
        )
    }
}
export default Main