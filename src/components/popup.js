import React, {Component} from 'react';
import {Button,Modal,ModalHeader,ModalBody,ModalFooter} from 'reactstrap'

class PopUp extends Component{
    constructor(props){
        super(props);
        
        this.state={
            isToggleReserved: true,
            modal: false
        };

        this.handleClick=this.handleClick.bind(this);
        this.modalToggle = this.modalToggle.bind(this)
    }

        modalToggle(){
            this.setState({
                modal:!this.state.modal
            })
        }

        handleClick(){
            this.setState(prevState=>({
                isToggleReserved: !prevState.isToggleReserved
            }))
        }
    render(){
        return(
            <div>
               <Button color={this.state.isToggleReserved?"success":'warning'} onClick={this.modalToggle}>{this.state.isToggleReserved?'Reserve':'UnReserve'}{this.props.buttonLabel}</Button>
               <Modal isOpen={this.state.modal} toggle={this.modalToggle} className={this.props.className}>
                    <ModalHeader toggle={this.modalToggle}>Confirmation ?</ModalHeader>
                        <ModalBody>
                            Book futsal ground {/*futsal ground props*/} at this time {/*time props*/} 
                        </ModalBody>
                    <ModalFooter>
                        <Button color="success" onClick={()=>{this.modalToggle();this.setState({isToggleReserved:!this.state.isToggleReserved})}}> Confirm</Button>{''}
                        <Button color ="danger" onClick={()=>{this.modalToggle()}}> Cancel</Button>
                    </ModalFooter>
                </Modal>
            </div>
        )
    }
}

export default PopUp
