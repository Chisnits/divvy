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
            data: this.state.data,
            // total: this.state.data.reduce( (a,b) => {
            //     return a + b.amount;
            // }, 0)
        })
    }

    add (description, amount) {
        // ajax POST request to server goes here
        const newObj = {"amount": amount, "description": description}
        if (this.state.data.length <= 7){
            this.setState({
                data: [...this.state.data, newObj],
                total: this.state.data.reduce( (a,b) => {
                    console.log("A ", a)
                    console.log("B ", b)
                    return a + b.amount;
                }, 0)
            });
        } else {
            this.state.data.splice(0,1)
            //if the list gets too long, hide the previous transactions.
            this.setState({
                data: [...this.state.data, newObj],
                total: this.state.data.reduce( (a,b) => {
                    return a + b.amount;
                }, 0)
            })
        }
    }

    render() {
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