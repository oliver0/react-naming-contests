import React, { Component } from 'react';
import axios from 'axios';
import Header from './Header';
import ContestPreview from './ContestPreview';

class App extends Component {
  state = {
    pageHeader: 'Naming Contests',
    contests: this.props.initialContests
  };

  componentDidMount(){
    axios.get('/api/contests')
      .then(resp => {
        console.log(resp);
        this.setState({
          contests: resp.data.contests
        });
      })
      .catch(console.error);
    }


  componentWillUnmount(){
  console.log("message");
    //clean timers, listeners
  }

  render(){
    return(
      <div className="App">
        <Header message={this.state.pageHeader}/>
        <div>
          {this.state.contests.map(contest =>
            <ContestPreview key={contest.id} {...contest}/>
          )}
        </div>
      </div>
    );
  }

};

export default App;
