import React from 'react';

class Footer extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return(
            <footer>
                <div>
                    {this.props.copyright}
                </div>
            </footer>
        )
    }
}
export default Footer