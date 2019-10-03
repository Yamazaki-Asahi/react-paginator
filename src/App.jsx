import React from 'react';
import logo from './logo.svg';
import './App.css';
import Paginator from './Paginator';
import PageList from './PageList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
    }
  }
  render() {
    return <div className="App">
      <PageList />
      <Paginator />
    </div>
  }
}

export default App;
