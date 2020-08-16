import React from 'react';
import './BlogPost.css';

function BlogPost(props) {
    const year = new Intl.DateTimeFormat('en', { year: 'numeric' }).format(props.date);
    const month = new Intl.DateTimeFormat('en', { month: 'short' }).format(props.date);
    const day = new Intl.DateTimeFormat('en', { day: '2-digit' }).format(props.date);
    const theDate = `${day}-${month}-${year}`;

    return (
        <div className="Post">
          <h2>{props.title}</h2>
          <h5>{theDate}</h5>
          <div>{props.content}</div>
        </div>
      );
}

export { BlogPost };