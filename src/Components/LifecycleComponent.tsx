import React from 'react';

// Define the component's state type
interface LifecycleComponentState {
  count: number;
}

// Create a class component
class LifecycleComponent extends React.Component<{}, LifecycleComponentState> {
  constructor(props: {}) {
    super(props);
    // Initialize state
    this.state = {
      count: 0,
    };
  }

  // Lifecycle method that runs after the component mounts
  componentDidMount() {
    console.log("Component Mounted");
  }

  // Lifecycle method that runs after the component updates
  componentDidUpdate(prevProps: {}, prevState: LifecycleComponentState) {
    // Check if the count has changed
    if (prevState.count !== this.state.count) {
      console.log("Component Updated");
    }
  }

  // Method to handle button click and update state
  incrementCount = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };

  render() {
    return (
      <div>
        <h1>Lifecycle Component</h1>
        <p>Count: {this.state.count}</p>
        <button onClick={this.incrementCount}>Increment Count</button>
      </div>
    );
  }
}

export default LifecycleComponent;
