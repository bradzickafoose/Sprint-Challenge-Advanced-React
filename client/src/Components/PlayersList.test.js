import React from 'react';
import { render } from '@testing-library/react';
import PlayersList from './PlayersList';

test('PlayersList renders without crashing', async () => {
	await render(<PlayersList />);
});
