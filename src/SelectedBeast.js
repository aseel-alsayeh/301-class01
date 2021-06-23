import React, { Component } from 'react'
import { Button,Modal,Card } from 'react-bootstrap';


 class SelectedBeast extends Component {
    

        
    render() {
        return (
          <>
          <Modal show={this.props.showdata}>  
          <Modal.Header closeButton>
            <Modal.Title>{this.props.data.title}</Modal.Title>
          </Modal.Header>
        
          <Modal.Body>
          <Card style={{ width: "80%", height: "100%",marginLeft: "7vh" }} bg={'warning'}>
                            <Card.Img width={200}
                                height={280}  src={this.props.data.img_url} alt={this.props.data.title} />
                            <Card.Body>

                                <Card.Text>
                                    {this.props.data.description}
                                </Card.Text>
                            </Card.Body>




                        </Card>
          </Modal.Body>
        
          <Modal.Footer>
            <Button variant="secondary" onClick={this.props.handleFunctionToClose} >Close</Button>

          </Modal.Footer>
        </Modal>
                
           </> 
        )
    }
}

export default SelectedBeast
