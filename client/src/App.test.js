import React from 'react';
import App from './App';
import { render } from '@testing-library/react';

test('renders without crashing', () => {
	const div = document.createElement('div');
	render(<App />);
});
