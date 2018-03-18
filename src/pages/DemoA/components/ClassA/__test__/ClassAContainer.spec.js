import React from 'react'
import { shallow } from 'enzyme'

import ClassAContainer from '../ClassAContainer'

/*
UNIT TEST SHOULD:
Isolated: all interactions with external services should are mocked
Specific: if change small functionality you would like to get specific test failure message
Descriptive: describe what the system does not how so that you can easily refactor
*/

const setup = propOverrides => {
  const props = Object.assign({
    test: 'test',
    onClear: jest.fn(),
  }, propOverrides)

  const wrapper = shallow(<ClassAContainer {...props} />)

  return {
    props,
    wrapper
    // clear: wrapper.find('.clear-completed'),
    // count: wrapper.find('.todo-count'),
  }
}

describe('ClassAContainer', () => {
  const { wrapper } = setup()

  it('should render', () => {
    expect(wrapper.exists()).toBe(true)
  })

  it('should match snapshot', () => {
    expect(wrapper).toMatchSnapshot()
  })
})
