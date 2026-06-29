// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders CoreLattice title', () => {
    render(<App />);
    const titleElement = screen.getByText(/CoreLattice/i);
    expect(titleElement).toBeInTheDocument();
});
