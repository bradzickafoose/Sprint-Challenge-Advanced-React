import React from 'react';
import Player from './Player';

function PlayersList({ players }) {
	return (
		<div className='Players-list'>
			{players.map(player => <Player key={player.id} {...player} /> )}
		</div>
	);
}

export default PlayersList;
