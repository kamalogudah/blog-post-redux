import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from './../actions';

class PostList extends Component {

  componentDidMount() {
    this.props.fetchPosts();
  }
  render() {
    return (
      <div className="ui container"> Post List </div>);


  }
}

const mapPropToState = (state) => {
  return { }
}

export default connect(mapPropToState, { fetchPosts})(PostList);