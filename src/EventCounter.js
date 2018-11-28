import React from 'react';

class EventCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = { clicks: 0 };
        this.clickHandler = this.clickHandler.bind(this);
    }

    clickHandler(event) {
        const clickNew = this.state.clicks + 1;
        this.setState({ clicks: clickNew });
        if (clickNew % 2 === 0) {
            this.props.onEventClick(clickNew);
        }
    }

    render() {
        return <div onClick={this.clickHandler}>
            This div has beed clicked {this.state.clicks} times
        </div>;
    }
}

export default EventCounter;
