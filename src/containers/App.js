import React, {Component} from 'react';
import { connect } from 'react-redux'
// import CardList from '../components/CardList';
// import SearchBox from '../components/SearchBox';
// import Scroll from '../components/Scroll';
// import ErrorBoundry from '../components/ErrorBoundry';
import './App.css';
import {setSearchField, requestRobots} from '../actions'
// import Header from '../components/Header';
import MainPage from '../components/MainPage';

const mapStateToProps = state => {
	return {
		searchField: state.searchRobots.searchField,
		robots: state.requestRobots.robots,
		isPending: state.requestRobots.isPending,
		error: state.requestRobots.error
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onSearchChange: (event) => dispatch(setSearchField(event.target.value)),
		onRequestRobots: () => dispatch(requestRobots())
	}
}
class App extends Component {
		// constructor() {
		// 	super()
		// 	this.state = {
		// 		robots: [],
    // 		// searchfield: ''
		// 	}
		// }
		// componentDidMount() {
		// 	this.props.onRequestRobots()
			// console.log(this.props.store.getState())
			// fetch('https://jsonplaceholder.typicode.com/users')
			// 	.then(response=>{
			// 		return response.json()
			// 	})
			// 	.then(users=>{
			// 		this.setState({robots: users})
			// 	})
		// }

		// onSearchChange = (event) => {
		// 	this.setState({searchfield: event.target.value})
		// }

    render() {
		return <MainPage {...this.props}/>
    }

}

export default connect(mapStateToProps, mapDispatchToProps)(App);