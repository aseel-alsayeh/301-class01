import React, { Component } from 'react'
import HornedBeast from './HornedBeast'
import Data from './data.json'


class Main extends Component {
    render() {
        return (
            <div>
                {
                    Data.map((b, index) => {
                        return <HornedBeast key={index} clicks={0} title={b.title} imageUrl={b.image_url} description={b.description} />
                    })
                }
                
            </div>

        )
    }
}

export default Main




