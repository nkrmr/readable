import React from 'react';
import { connect } from 'react-redux';

const PostItem = ({ id, title, body }) => (
  <li>
    <h1>{title}</h1>
    <p>{body}</p>
  </li>
);

const PostList = props => (
  <div className="Post-List">
    <ul>{props.posts.map(post => <PostItem key={post.id} {...post} />)}</ul>
  </div>
);

const mapStateToProps = state => state;

export default connect(mapStateToProps)(PostList);
