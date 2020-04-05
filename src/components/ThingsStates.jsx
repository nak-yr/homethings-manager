import React from 'react';
import '../App.css';

class ThingState extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'table',
            location: 'corner of the room',
            importance: '4',
        };
    }
    render () {
        return (
            <>
                <h2>Name:{this.state.name}</h2>
                <h2>location:{this.state.location}</h2>
                <h2>importance:{this.state.importance}</h2>
            </>
        )
    }
}

export default ThingState;