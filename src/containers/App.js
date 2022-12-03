import React, { Component , useState, useEffect } from 'react';
import CardList from '../components/CardList';
import SearchBox from '../components/SearchBox';
import Scroll from '../components/Scroll'
import './App.css'


function App() {
	const [robots, setRobots] = useState([]);
	const [searchField, setSearchField] = useState('');

	useEffect(() => {
		fetch('https://jsonplaceholder.typicode.com/users')
			.then(reponse => reponse.json())
			.then(users => setRobots(users));
	},[])

	const onSearchChange = (event) => {
		setSearchField(event.target.value);
	}

	const filteredRobots = robots.filter(robot => {
		return robot.name.toLowerCase().includes(searchField.toLowerCase());
	});
	if(!robots.length) { //equivalnt to robots.length === 0
		return <h1>Loading</h1>
	} else {
		return (
			<div className='tc'>
				<h1 className='f2'>RobotFriends</h1>
				<SearchBox searchChange={onSearchChange} />
				<Scroll>
					<CardList robots={filteredRobots} />
				</Scroll>
			</div>
		);
	}
}

export default App; 

// class App extends Component {
// 	constructor() {
// 		super();
// 		this.state = {
// 			robots: [],
// 			searchfield: ''
// 		};
// 	}

// 	componentDidMount() {
// 		fetch('https://jsonplaceholder.typicode.com/users')
// 			.then(reponse => reponse.json())
// 			.then(users => this.setState( { robots: users} ));
// 	}

// 	onSearchChange = (event) => {
// 		this.setState( {searchfield: event.target.value} );
// 	}

// 	render() {
// 		const { robots, searchfield } = this.state;
// 		const filteredRobots = robots.filter(robot => {
// 			return robot.name.toLowerCase().includes(searchfield.toLowerCase());
// 		});
// 		if(!robots.length) { //equivalnt to robots.length === 0
// 			return <h1>Loading</h1>
// 		} else {
// 			return (
// 				<div className='tc'>
// 					<h1 className='f2'>RobotFriends</h1>
// 					<SearchBox searchChange={this.onSearchChange} />
// 					<Scroll>
// 						<CardList robots={filteredRobots} />
// 					</Scroll>
// 				</div>
// 			);
// 		}
// 	}
// }

// export default App;