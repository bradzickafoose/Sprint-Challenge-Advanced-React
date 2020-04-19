import React from 'react';
import Player from './Player';

function PlayersList(props) {
	console.log('Players List:', props);
	return (
		<div className='Players-list'>
			{props.players.map(player => (
				<Player key={player.id} name={player.name} country={player.country} searches={player.searches} />
			))}
		</div>
	);
}

export default PlayersList;
