import React, { Component } from 'react'
import Axios from 'axios'

export default class PostList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      postList: []
    }
  }

  componentDidMount() {
    Axios.get('http://localhost:8080/posts')
      .then(result => {
        this.setState({
          postList: result.data
        })
      })
  }

  render() {
    return (
      <div>
        {this.state.postList.map(post => <p>{post.text}</p>)}
      </div>
    )
  }
}
