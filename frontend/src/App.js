/* App.js */
import React, {Component} from 'react';
import './App.css';


class App extends Component {

  constructor(props) {
          super(props);
          this.state = {
            layout: {},
            frames: [],
            config: {}
          };
      }

  render() {

    return (
      <div className="App">
      <h1>hello world</h1>
      </div>
    );
  }
}

export default App;
