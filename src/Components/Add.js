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
        var numberCreator = Number(e.target.value)
        //Make sure that the number will only ever be in the hundreths value.
        this.setState({
            amount: numberCreator
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