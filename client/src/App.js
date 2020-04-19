import React from 'react';
import axios from 'axios';
import Navbar from './Components/Navbar';
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
    axios
      .get('http://localhost:5000/api/players')
      .then(response => {
        console.log('Players data:', response);
			  this.setState({ players : response.data });
      })
      .catch(error => console.log('Error fetching player data', error))
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
