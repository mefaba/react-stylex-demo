
import React from 'react';

export default class extends React.Component {
    constructor(props) {
        super(props);
        this.state = {name: 'React Stylex'};
    }
    render() {
        return <div className="App">
            Hello from {this.state.name}
        </div>;
    }
}


<style>
    .App {
        display: flex;
        justify-content: space-between;
        width: 50%;
        color: red;
    }
</style>
