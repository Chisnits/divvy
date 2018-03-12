import React, { Component } from 'react';
import Add from '../Components/Add';
import { TransactionList } from '../Components/TransactionList';
import { Balance } from '../Components/Balance';

var dataSet = [
    {amount: -10, description: 'Chipotle'},
    {amount: 1000, description: 'Paycheck'},
    {amount: -4.50, description: 'Coffee'},
    {amount: -150, description: 'Date'}
];

class Budget extends Component {
    constructor(props){
        super(props);

        this.state = {
            data: dataSet,
            total: 0
        };

        this.add = this.add.bind(this);
    }
    componentWillMount(){
        this.setState({
            data: dataSet,
            total: dataSet.reduce( (a,b) => {
                return a + b.amount;
            }, 0)
        })
    }

    add (description, amount) {
        // ajax POST request to server goes here
        const newObj = {"amount": amount, "description": description}
        this.setState({
            data: [... dataSet, newObj]
        })
    }

    render() {
        console.log(dataSet)
        return (
            <div>
              <h1>My Budget</h1>
              <Add onAdd={this.add} />
              <TransactionList data={this.state.data} />
              <Balance total={this.state.total} />
            </div>
        );
    }
}
export default Budget;