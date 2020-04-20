import React from 'react';

function Player({ name, country, searches }) {
	return (
		<div className='Player-card'>
			<h1>{name}</h1>
			<div className='Player-stats'>
				<p>
					<span className='Player-stat-title'>Country</span>
					<span className='Player-stat'>{country}</span>
				</p>
				<p>
					<span className='Player-stat-title'>Searches</span>
					<span className='Player-stat'>{searches}</span>
				</p>
			</div>
		</div>
	);
}

export default Player;
