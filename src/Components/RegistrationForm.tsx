// src/components/RegistrationForm.tsx

import React, { useState } from 'react';

// Define the types for the form state
interface FormState {
  name: string;
  email: string;
  password: string;
}

// Define the types for error messages
interface Errors {
  name?: string;
  email?: string;
  password?: string;
}

const RegistrationForm: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({ name: '', email: '', password: '' });
  const [errors, setErrors] = useState<Errors>({});

  // Handle form field changes
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  // Validate the form inputs
  const validateForm = (): boolean => {
    let tempErrors: Errors = {};
    let isValid = true;

    if (!formState.name) {
      tempErrors.name = 'Name is required';
      isValid = false;
    }

    if (!formState.email) {
      tempErrors.email = 'Email is required';
      isValid = false;
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      tempErrors.email = 'Email format is invalid';
      isValid = false;
    }

    if (!formState.password) {
      tempErrors.password = 'Password is required';
      isValid = false;
    } else if (formState.password.length < 6) {
      tempErrors.password = 'Password must be at least 6 characters';
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      // Submit the form (for now, just log the form state)
      console.log('Form submitted:', formState);
      // Reset the form
      setFormState({ name: '', email: '', password: '' });
      setErrors({});
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formState.name}
          onChange={handleChange}
        />
        {errors.name && <span style={{ color: 'red' }}>{errors.name}</span>}
      </div>

      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          value={formState.email}
          onChange={handleChange}
        />
        {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
      </div>

      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={formState.password}
          onChange={handleChange}
        />
        {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
      </div>

      <button type="submit">Register</button>
    </form>
  );
};

export default RegistrationForm;
