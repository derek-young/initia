import React from 'react';
import {Link} from 'react-router';
import Quotes from './quotes.jsx';

const Home = () => (
  <div>
    <Link to="/threads">
      <button className="login">Login</button>
    </Link>
    <div className="bucket">
      <div className="container">
        <h1>Initia</h1>
        <div id="quote">
          <Quotes/>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
