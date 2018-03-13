import React from 'react';

export const TransactionList = (props) => {
    var List = props.data.map((item, i) => (
        <div key={i}>
            <div>{item.description}</div>
            <div>{item.amount}</div>
        </div>
    ))

    return (
        <div>
            <h1>Transactions</h1>
            <div>
                {List}
            </div>
        </div>
    )
}