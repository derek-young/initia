import React from 'react';

export default class Thread extends React.Component {
  render() {
    return (
      <div>
        <h4>{this.props.topic}</h4>
        <div>
          child
        </div>
      </div>
    )
  }
};

// {this.props.messages.map((message) => (
//   <div>
//     <p>{message.text}</p>
//     <p>{message.user}</p>
//   </div>
// ))}
