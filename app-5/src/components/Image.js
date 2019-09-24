import React, { Component } from 'react'

class Image extends Component {
    render(){
        return(
            <div>
                <img src={this.props.url} />
                <caption>Doggie</caption>
            </div>
    )
}
}

export default Image;