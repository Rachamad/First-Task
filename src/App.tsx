// src/App.tsx

import React from 'react'; // Import React first
import NameList from './Components/NameList';
import LifecycleComponent from './Components/LifecycleComponent';
import RegistrationForm from './Components/RegistrationForm';
import ThemeToggle from './Components/ThemeToggle';
import SampleComponent from './Components/SampleComponent';
import withLogging from './hocs/withLogging';

// Wrap the SampleComponent with the withLogging HOC
const EnhancedSampleComponent = withLogging(SampleComponent);

const App: React.FC = () => {
  // Sample array of names
  const namesArray: string[] = ['John Doe', 'Jane Smith', 'Nick Johnson', 'Alice Williams'];

  return (
    <div>
      <h1>Welcome to Name List App</h1>
      {/* Render NameList component */}
      <NameList names={namesArray} />

      <h1>React Class Component with Lifecycle Methods</h1>
      {/* Render LifecycleComponent */}
      <LifecycleComponent />

      <h1>Registration Form</h1>
      {/* Render RegistrationForm component */}
      <RegistrationForm />

      <h1>Theme Toggle</h1>
      {/* Render ThemeToggle component */}
      <ThemeToggle />

      <h1>Higher Order Component Example</h1>
      {/* Render Enhanced SampleComponent */}
      <EnhancedSampleComponent />
    </div>
  );
};

export default App;
