import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Navigate } from 'react-router-dom'

export default (ChildComponent) => {
  class ComposedComponent extends Component {
    render() {
      return (
        <>
          {!this.props.auth && <Navigate to="/" replace={true} />}
          <ChildComponent {...this.props} />
        </>
      )
    }
  }

  function mapStateToProps(state) {
    return { auth: state.auth }
  }

  return connect(mapStateToProps)(ComposedComponent)
}
