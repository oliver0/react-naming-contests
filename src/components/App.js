import React, { Component } from 'react';
import Header from './Header';
import ContestPreview from './ContestPreview';

class App extends Component {
  state = {pageHeader: 'Naming Contests'};

  componentDidMount(){
      // ajax timers, listeners
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
          {this.props.contests.map(contest =>
            <ContestPreview key={contest.id} {...contest}/>
          )}
        </div>
      </div>
    );
  }

};

export default App;
