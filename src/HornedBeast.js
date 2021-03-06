import React, { Component } from 'react'
import { Card,Button } from 'react-bootstrap';


 class HornedBeast extends Component {
    constructor(props){
        super(props);
        this.state={
            clicks:props.clicks,
        }
    }
    changeClicksNumbers=()=>{
        this.setState(
            {
                clicks:this.state.clicks+1
            })
        }

    clickMe=()=>{
        this.props.modal({
            title: this.props.title,
            img_url: this.props.img_url,
            description: this.props.description
        })
    }

    render() {
        return (
            <div>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={this.props.imageUrl}/>
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                        <Card.Text>
                        {this.props.description}
                        </Card.Text>
                        <img onClick={this.changeClicksNumbers} src="data:image/jpeg;base64,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" width="30px" height="30px"></img>
                        <span>{this.state.clicks}</span>
                        <Button  style={{ width: "50%", marginTop: "2vh", marginBottom:'2vh', marginLeft: "10vh" }} variant="danger" onClick={this.clickMe}> Click me </Button>
                   
                    </Card.Body>
                </Card>
            </div>
        )
    }
}

export default HornedBeast;

