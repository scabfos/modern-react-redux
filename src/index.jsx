import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyA7Fgg5uoHmq1lcKbdBoJzleQr-kd8uBuc';

const App = () => (
  <div>
    Hi!
    <SearchBar />
  </div>
);

ReactDOM.render(<App />, document.querySelector('.container'));
