import React, { Component } from 'react';


class AddBudget extends Component {
    constructor(props) {
        super(props);

        this.state={
            title: "",
            amount: ""
        }
        this.handleChangeTitle = this.handleChangeTitle.bind(this);
        this.handleChangeAmount = this.handleChangeAmount.bind(this);
        this.addBudget = this.addBudget.bind(this);
    }

    handleChangeTitle(e){
        this.setState({
            title: e.target.value
        })
    }
    handleChangeAmount(e){
        var numberCreator = Number(e.target.value)
        this.setState({
            amount: numberCreator
        })
    }
    addBudget(e) {
        e.preventDefault();
        console.log(this.props)
        this.props.onAdd(this.state.title, this.state.amount)
    }
    render() {
        return (
            <div>
                <form>
                    <input type="text" placeholder="Title" value={this.state.title} onChange={this.handleChangeTitle}/>
                    <input type="number" placeholder="Amount" value={this.state.amount} onChange={this.handleChangeAmount}/>
                    <button onClick={this.addBudget}>Add</button>
                </form>
            </div>
        );
    }
}

export default AddBudget;