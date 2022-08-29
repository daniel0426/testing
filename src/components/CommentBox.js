import React, {Component} from 'react'
import {connect} from 'react-redux';
import * as actions from 'actions'

class CommentBox extends Component {
  state = { comment: '' }

  handleChange = (e) => {
    this.setState({ comment: e.target.value })
  }
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.saveComment(this.state.comment)
    this.setState({ comment: '' })
  }
  fetchComment = () => {}

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea onChange={this.handleChange} value={this.state.comment} />
          <div>
            <button>Sumbit Comment</button>
          </div>
        </form>
        <button onClick={this.props.fetchComments}>Fecth Comments</button>
      </div>
    )
  }
}

export default connect(null, actions)(CommentBox);