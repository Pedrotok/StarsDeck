import React from 'react';
import Ranking from './components/Ranking';
import api from './lib/api';
import './Home.css';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      reload: false
    };
  }

  render() {
    return (
      <div>
        <Ranking topContributors={} />
        {/*<AddEventForUserButton />*/}
      </div>
    );
  }
}

export default Home;
