import React, {Component} from 'react'
import CardList from '../components/CardList'
import SearchBox from '../components/SearchBox'
import Scroll from '../components/Scroll'
import ErrorBoundry from '../components/ErrorBoundry'
import './MainPage.css'
import Header from '../components/Header'

class MainPage extends Component {
  componentDidMount() {
    this.props.onRequestRobots()
  }
  render() {
    const {searchField, onSearchChange, robots, isPending} = this.props
    const filterRobots = robots.filter(robot => {
      return robot.name.toLowerCase().includes(searchField.toLowerCase())
    })
    return isPending ?
      <h1>Loading</h1> :
      (
        <div className='tc'>
          <Header />
          <SearchBox searchChange={onSearchChange}/>
          <Scroll>
            <ErrorBoundry>
              <CardList robots={filterRobots}/>
            </ErrorBoundry>
          </Scroll>
        </div>
      )
  }

}

export default MainPage