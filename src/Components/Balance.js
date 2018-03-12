import React, { Component } from 'react';

export const Balance = (props) => {
    console.log(props)
    var style = {
        color: props.total > 0 ? 'green' : 'red'
    };

    return (
        <div>
            <h1>Balance</h1>
            <p style={style}>${ props.total.toFixed(2) }</p>
        </div>
    )
};