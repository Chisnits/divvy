import React, { Component } from 'react';

class Add extends Component {
    constructor(props) {
        super(props);

        this.state={
            description: "",
            amount: ""
        }
        this.handleChangeDesc = this.handleChangeDesc.bind(this);
        this.handleChangeAmount = this.handleChangeAmount.bind(this);
        this.add = this.add.bind(this);
    }

    handleChangeDesc(e){
        this.setState({
            description: e.target.value
        })
    }
    handleChangeAmount(e){
        // var numberChecker = parseFloat(Math.round(e.target.value * 100) / 100).toFixed(2);
        //Make sure that the number will only ever be in the hundreths value.
        this.setState({
            amount: e.target.value
        })
    }
    add(e) {
        e.preventDefault();
        this.props.onAdd(this.state.description, this.state.amount)
    }
    render() {
        return (
            <div>
                <form>
                    <input type="text" placeholder="Description" value={this.state.description} onChange={this.handleChangeDesc}/>
                    <input type="number" placeholder="Amount" value={this.state.amount} onChange={this.handleChangeAmount}/>
                    <button onClick={this.add}>Add</button>
                </form>
            </div>
        );
    }
}

export default Add;