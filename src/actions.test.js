import * as actions from './actions'
import {
  CHANGE_SEARCH_FIELD
} from './constants.js'

it('should creat an action to search robots', () => {
  const text = 'wooo'
  const expectedAction = {
    type: CHANGE_SEARCH_FIELD,
    payload: text
  }
  expect(actions.setSearchField(text)).toEqual(expectedAction)
})