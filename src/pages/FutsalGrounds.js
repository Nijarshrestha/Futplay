import React, {Component} from "react";
import { Card, Icon, Image,Container, Header } from 'semantic-ui-react'

class FutsalGround extends Component{

render(){
    return(
            <div className="">
                    <Container fluid>
                        <Card.Group text centered itemsperRow={5}>
                        <Card>
                        <Image src={require('../images/ball-field-football-47730.jpg')}/>
                        <Card.Content>
                        <Card.Header>Chaitya Futsal</Card.Header>
                        <Card.Meta>
                            <span className='date'>Solteemode,Kathmandu</span>
                        </Card.Meta>
                        <Card.Description></Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                        
                        </Card.Content>
                    </Card>
                    <Card>
                        <Image src={require('../images/ball-football-game-39562.jpg')}/>
                        <Card.Content>
                        <Card.Header>Mates Futsal</Card.Header>
                        <Card.Meta>
                            <span className='address'>Kalanki,Kathmandu</span>
                        </Card.Meta>
                        <Card.Description></Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Image src={require('../images/ball-football-game-39562.jpg')}/>
                        <Card.Content>
                        <Card.Header>Tahachal Futsal</Card.Header>
                        <Card.Meta>
                            <span className='address'>Tahachal,Kathmandu</span>
                        </Card.Meta>
                        <Card.Description></Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                        </Card.Content>
                    </Card>
                    <Card>
                        <Image src={require('../images/ball-blur-championship-209841.jpg')}/>
                        <Card.Content>
                        <Card.Header>Tahachal Futsal</Card.Header>
                        <Card.Meta>
                            <span className='address'>Tahachal,Kathmandu</span>
                        </Card.Meta>
                        <Card.Description></Card.Description>
                        </Card.Content>
                        <Card.Content extra>
                        </Card.Content>
                    </Card>
                    </Card.Group>   
                    </Container>
            </div>
        )
    }
}
export default FutsalGround;