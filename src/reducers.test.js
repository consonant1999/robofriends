import {
  CHANGE_SEARCH_FIELD
} from './constants.js'
import * as reducers from './reducers'

describe('searchRobots', () => {
  const initialStateSearch = {
    searchField: ''
  }
  it('should return the initial state', () => {
    expect(reducers.searchRobots(undefined, {})).toEqual({searchField: ''})
  })

  it('should handle CHANGE_SEARCHFIELD', () => {
    expect(reducers.searchRobots(initialStateSearch, {
      type: CHANGE_SEARCH_FIELD,
      payload: 'abc'
    })).toEqual({
      searchField: 'abc'
    })
  })
})