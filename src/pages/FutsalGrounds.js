import React, {Component} from "react";
import { Card, Icon, Image,Container, Header, Loader, Message } from 'semantic-ui-react'
import { getAllGrounds } from "../redux/actions/futsalGround";
class FutsalGround extends Component{

    constructor(props){
        super(props);
    }

    componentDidMount() {
        this.props.getAllGrounds();
    }

render(){
    const {list,error,loading} = this.props;
    return(
            <div className="">
                    <Container fluid>
                    {loading && <Loader />}
                    {error &&<Message negative>{error}</Message>}
                        <Card.Group text centered itemsperRow={4}>
                        {list.map(ground=>{return(  <Card>
                        <Image src={require('../images/ball-field-football-47730.jpg')}/>
                        <Card.Content>
                        <Card.Header>{ground.name}</Card.Header>
                        <Card.Meta>
                            <span className='date'>{ground.address}</span>
                        </Card.Meta>
                        <Card.Description>
                            <Header as='h2'><Icon name="phone"/>:{ground.phone}</Header>
                            <Header as='h2'><Icon name="mail"/>:{ground.email}</Header>
                        </Card.Description>
                        </Card.Content>
                    </Card>)})}
                       
                  
                    </Card.Group>   
                    </Container>
            </div>
        )
    }
}
const mapStateToProps = state => ({
    login: state.login,
    list: state.ground.list,
    error: state.ground.error,
    loading:state.ground.loading
  });
  
  const mapDispatchToProps = dispatch => ({
    getAllGrounds: bindActionCreators(getAllGrounds, dispatch),
  });
export default connect(mapStateToProps,mapDispatchToProps)(FutsalGround);

