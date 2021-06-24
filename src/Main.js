import React, { Component } from 'react'
import HornedBeast from './HornedBeast'
import Data from './data.json'
import { Form } from 'react-bootstrap';



class Main extends Component {
    constructor(props) {
        super(props)
        this.state = {
            numberOfHorns: 0,
        }
    }

    handleHorns = (e) => {
        this.setState({
            numberOfHorns: e.target.value
        })
    }

    render() {
        return (
            
                <>
                    // inset the form 
                    <Form>
                        <Form.Group controlId="exampleForm.SelectCustom">
                            <Form.Label>Custom select</Form.Label>
                            <Form.Control as="select" custom onChange={(e)=>{this.handleHorns(e)}}>
                                <option value="all the beasts">all the beasts</option>
                                <option value="1">1</option>
                                <option value="2"> 2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                            </Form.Control>
                        </Form.Group>
                    </Form>
                  {
                    Data.map((b, index) => {
                        return (Number(this.state.numberOfHorns)===b.horns && <HornedBeast key={index} clicks={0} title={b.title} imageUrl={b.image_url} description={b.description} modal={this.props.selectModal} />)
                         || (Number(this.state.numberOfHorns)===0 && <HornedBeast key={index} clicks={0} title={b.title} imageUrl={b.image_url} description={b.description} modal={this.props.selectModal} />)
                    })
                }

            </>

        )
    }
}

export default Main




