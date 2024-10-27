// src/components/NameList.tsx

import React from 'react';

// Define the props type
interface NameListProps {
  names: string[]; // An array of strings
}

// Create the NameList component
const NameList: React.FC<NameListProps> = ({ names }) => {
  return (
    <div>
      <h2>List of Names</h2>
      <ul>
        {names.map((name, index) => (
          <li key={index}>{name}</li> // Render each name in a list item
        ))}
      </ul>
    </div>
  );
};

export default NameList;
