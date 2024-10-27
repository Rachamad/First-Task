// src/hocs/withLogging.tsx

import React from 'react';

// Define the Higher Order Component
const withLogging = (WrappedComponent: React.ComponentType) => {
  return class extends React.Component {
    componentDidMount() {
      console.log('Component Mounted');
    }

    componentDidUpdate() {
      console.log('Component Updated');
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default withLogging; // Make sure to export the HOC
