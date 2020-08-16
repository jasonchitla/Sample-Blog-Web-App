import React, { Component } from 'react';
import './App.css';
import {BlogPost} from './BlogPost';
import NewPost from './NewPost';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {blogs: [], isNewPostScreenUp: false};

    this.toggleNewPostView = this.toggleNewPostView.bind(this);
  }

  componentDidMount() {
    fetch('http://localhost:8080/blogs/read/')
      .then(res => res.json())
      .then(blogs => this.setState({ blogs }));
  }

  toggleNewPostView() {
    this.setState({ isNewPostScreenUp: !this.state.isNewPostScreenUp });
  }

  render() {
    return (
      <div>
        <div className="header">
          <h1>My Blogs</h1>
          <button className="new-post-button" onClick={this.toggleNewPostView}> New Post </button>
        </div>
        {!this.state.isNewPostScreenUp ? (
        <div className="row">
          <div className="column">
            {this.state.blogs.map(blog =>
              <BlogPost key = {blog.id} title = {blog.title} date = {blog.date} content = {blog.content}/>
            )}
          </div>
        </div>
        ) : (
          <div>
            <NewPost />
            <button className="cancel-button" onClick={this.toggleNewPostView}> Cancel </button>
          </div>
        )}
      </div>
    );
  }
}

export default App;