import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Popup, Segment,Header, Label, Icon } from 'semantic-ui-react';
import {getInvitations} from '../redux/actions/invitation';

const square = { width: 50, height: 50 }

class Invitation extends Component {
    constructor(props) {
        super(props);
        this.state = { modalOpen: false };
        this.toggleModal = this.toggleModal.bind(this);
    }

    toggleModal() {
        this.setState({ modalOpen: !this.state.modalOpen });
    }

    componentDidMount() {
        if(this.props.userprofile._id) {
            this.props.getInvitations(this.props.userprofile._id);
        }
    }
    componentWillReceiveProps(newProps) {
        if(newProps.userprofile._id && newProps.userprofile._id!= this.props.userprofile._id) {
            this.props.getInvitations(newProps.userprofile._id);
            
        }
    }
    render() {
        return (<div className="invitation-component">
            <Segment circular style={square} onClick={() => this.toggleModal()} className="invitation-button">
                {!this.state.modalOpen && <Header as='h4'>
                     <Label color="red">{this.props.invitation.length}</Label>
                </Header>}
                {this.state.modalOpen && <Icon name="close" />}
            </Segment>
            <Popup open={this.state.modalOpen}  position='top right'>
                {this.props.invitation.length > 0 &&
                     this.props.invitation.map(invite =>{
                         return <Header as="h3" color="teal" key={invite._id}>
                {invite.senderID} has invited you to play at {invite.groundname} at {invite.slots} on {invite.date.replace(/d/g, '-')}</Header>})}

            </Popup>
        </div>)

    }
}

const mapDispatchToProps = dispatch => {
    return {
        getInvitations: bindActionCreators(getInvitations, dispatch),

    };
};
const mapStateToProps = state => ({
    invitation: state.invites.invitation,
    userprofile: state.userprofile.data
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Invitation);