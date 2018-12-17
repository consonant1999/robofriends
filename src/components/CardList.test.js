import React from 'react'
import { shallow } from 'enzyme';
import CardList from './CardList'

it('expect to render CardList component', () => {
    const mockRobots = [{
        id: 1,
        name: 'John Snow',
        username: 'JoJO',
        email: 'jojo@gmail.com'
    }]
    expect(shallow(<CardList robots={mockRobots}/>)).toMatchSnapshot()
})
