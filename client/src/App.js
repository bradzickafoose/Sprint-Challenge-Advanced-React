import React from 'react';
import axios from 'axios';
import PlayersList from './Components/PlayersList';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			players : [],
		};
	}

	componentDidMount() {
		axios.get('http://localhost:5000/api/players').then((response) => {
			console.log('Ze player response:', response);
			this.setState({
				players : response.data,
			});
		});
	}

	render() {
		return (
			<div className='App'>
				<header className='App-header'>
					<img src={logo} className='App-logo' alt='logo' />
					<h1>Women's World Cup Players</h1>
				</header>
				<PlayersList players={this.state.players} />
			</div>
		);
	}
}

export default App;
