import React, { Component } from 'react'

class ApiCall extends Component {
    constructor(){
        super()
        state = { 
            restaurant: []
        }
            
    }

    componentDidMount() {
        fetch('https://dpanqjjzqb.execute-api.us-east-1.amazonaws.com/prod')
        .then(result => result.json)
        .then((data) => {
            this.setState({ restaurant: data.body })
        })
          .catch(console.log)
    }

    render() {

    }
}

export default ApiCall;