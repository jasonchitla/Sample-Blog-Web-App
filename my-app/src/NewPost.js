import React, { Component } from 'react';
import './NewPost.css';

class NewPost extends Component {

  constructor(props) {
    super(props);
    this.state = { title: '', content: '' };
  }

  submitHandler = (event) => {
    fetch('http://localhost:8080/blogs/create', {
      method: 'POST',
      body: JSON.stringify({title: this.state.title, content: this.state.content}),
      headers: { 
        "Content-type": "application/json; charset=UTF-8"
      } 
    })
    .then(response => response.json())
    .then(json => console.log(json));
  }

  titleChangeHandler = (event) => {
    this.setState({title: event.target.value});
  }

  contentChangeHandler = (event) => {
    this.setState({content: event.target.value});
  }

  render() {
    return (
      <form className="NewPost" onSubmit={this.submitHandler}>
      <h1>New Post</h1>
      <label for="title">Title</label>
        <input
          id="title"
          type='text'
          onChange={this.titleChangeHandler}
        />
        <textarea onChange={this.contentChangeHandler} />
        <input
          className="submit-button"
          type='submit'
        />
      </form>
    );
  }
}

export default NewPost;