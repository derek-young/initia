import React from 'react';
import {Link} from 'react-router';

const SummaryView = ({threads}) => (
  <div>
    <Link to="/threads/create">
      <button className="btn create-btn">New Thread</button>
    </Link>
    <div className="thread-list">
      {threads.map((thread) => (
        <Link to={`/threads/view/${encodeURIComponent(thread.topic)}`} key={thread.topic}>
          <button className="btn">{thread.topic}</button>
        </Link>
      ))}
    </div>
  </div>
);

export default SummaryView;
