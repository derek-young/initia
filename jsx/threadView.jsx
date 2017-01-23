import React from 'react';
// import Thread from './thread.jsx';

export default class ThreadView extends React.Component {
  render() {
    return (
      <div>
        <h4>{this.props.thread.topic}</h4>
        <div>
          {this.props.thread.messages.map((message) => (
            <div>
              <p>{message.user + ': ' + message.text}</p>
            </div>
          ))}
        </div>
      </div>
    )
  }
};
