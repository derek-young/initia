import React from 'react';

export default class Quotes extends React.Component {
  constructor() {
    super();

    this.state = {
      index: 2,
      quotes: [
        {
          author: 'Jacko Willink',
          text: 'Discipline equals freedom.'
        },
        {
          author: 'Richard Feynman',
          text: 'The first principle is that you must not fool yourself and you are the easiest person to fool.'
        },
        {
          author: 'William MacAskill',
          text: 'The challenge for us is this: How can we ensure that, when we try to help others, we do so as effectively as possible?'
        }
      ]
    };
  }

  render () {
    return (
      <div>
        <p className="quote-text">
          {this.state.quotes[this.state.index].text}
        </p>
        <p className="author">
          {this.state.quotes[this.state.index].author}
        </p>
      </div>
    );
  }

  componentDidMount() {
    this._mounted = true;
    setTimeout(this.updateQuote.bind(this), 5000);
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  updateQuote() {
    if (this._mounted) {
      this.setState({index: (this.state.index + 1) % this.state.quotes.length});
      setTimeout(this.updateQuote.bind(this), 5000);
    }
  }
};
