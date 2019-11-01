import React from 'react';

function Player(props) {
	console.log('Player:', props);
	return (
		<div className='Player-card' key='props.key'>
			<h1>{props.name}</h1>
			<div className='Player-stats'>
				<p>
					<span className='Player-stat-title'>Country</span>
					<span className='Player-stat'>{props.country}</span>
				</p>
				<p>
					<span className='Player-stat-title'>Searches</span>
					<span className='Player-stat'>{props.searches}</span>
				</p>
			</div>
		</div>
	);
}

export default Player;
