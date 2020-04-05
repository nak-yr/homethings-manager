import React from 'react';
import '../App.css';

function ThingsList(props) {
    const numbers = props.numbers;
    const listThings = numbers.map(
        (number) => <li>{number}</li>
    );
    return (
        <ul>{listThings}</ul>
    );
}

export default ThingsList;