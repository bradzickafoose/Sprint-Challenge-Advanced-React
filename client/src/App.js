import React from 'react';
import Navbar from './Components/Navbar';
import axios from 'axios';
import PlayersList from './Components/PlayersList';
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
				<Navbar />
				<PlayersList players={this.state.players} />
			</div>
		);
	}
}

export default App;
