import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions';
import _ from 'lodash';
import { Link } from 'react-router-dom'

class PostsIndex extends Component {

    componentDidMount() {
        this.props.fetchPosts();
    }

    renderPosts() {
        return _.map(this.props.posts, post => {
            return (
                <li className='list-group-item' key={post.id} >
                    <Link to={`/posts/${post.id}`}>
                    {post.title}
                    </Link>
                </li>
            )
        })
    }

    render() {
        return (
            <div>
                <h3>Posts</h3>
                <div className='text-xs'>
                    <Link className='btn btn-primary' to='/posts/new'>
                    Add a Post
                    </Link>
                </div>
                <ul className='list-group'>
                    {this.renderPosts()}
                </ul>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return { posts: state.posts }
}

//we are passing in the action creator 'fetchPosts' to connect directly

export default connect(mapStateToProps, { fetchPosts })(PostsIndex);