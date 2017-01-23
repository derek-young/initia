import React from 'react';
import {Link} from 'react-router';
import SummaryView from './summaryView.jsx';
import ThreadView from './threadView.jsx';

export default class Threads extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentThread: {
        topic: 'Reason',
        created: '2017-01-14T06:15:10Z',
        messages: [
          {
            user: 'Jason',
            text: 'This be a great convo'
          },
          {
            user: 'Derek',
            text: 'So much topic going on'
          },
          {
            user: 'Michael',
            text: 'A bunch of good stuff her\''
          }
        ]
      },
      threads: [
        {
          topic: 'Reason',
          created: '2017-01-14T06:15:10Z',
          messages: [
            {
              user: 'Jason',
              text: 'This be a great convo'
            },
            {
              user: 'Derek',
              text: 'So much topic going on'
            },
            {
              user: 'Michael',
              text: 'A bunch of good stuff her\''
            }
          ]
        },
        {
          topic: 'Artificial Intelligence',
          created: '2017-01-02T10:20:10Z',
          messages: [
            {
              user: 'Jon',
              text: 'What be'
            },
            {
              user: 'Derek',
              text: 'All good things'
            }
          ]
        }
      ]
    };
  }

  render () {
    return (
      <div>
        <h2>Initia</h2>
        <div>
          <div className="summary-view">
            <SummaryView threads={this.state.threads}/>
          </div>
          <div className="thread-view">
            <ThreadView thread={this.state.currentThread}/>
          </div>
        </div>
      </div>
    )
  }

  updateThread () {
    this.setState({

    });
  }

};
