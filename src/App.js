import React, { Component } from 'react';
import Budget from './Containers/Budget'
import AddBudget from './Containers/AddBudget';

class App extends Component {
  render() {
    return (
      <div>
        <AddBudget />
        <Budget />
      </div>
    );
  }
}

export default App;
