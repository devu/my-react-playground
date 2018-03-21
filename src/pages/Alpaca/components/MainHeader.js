/* eslint no-return-assign: 0, no-console: 0 */

import React from 'react'
import { Menu, Input } from 'semantic-ui-react'

import BixBite from '../../../api'
import { ON_INITIALISED } from '../constants'

class MainHeader extends React.Component {
  constructor() {
    super()
    this.state = {
      initialised: false,
      activeItem: ''
    }

    BixBite.connect(this)
    this.addSlot(ON_INITIALISED, () => {
      console.log('MainHeader::', ON_INITIALISED)
      this.setState({ initialised: true })
    })
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state
    return (
      <Menu pointing width={16}>
        <Menu.Item name="home" active={activeItem === 'home'} onClick={this.handleItemClick} />
        <Menu.Item
          name="messages"
          active={activeItem === 'messages'}
          onClick={this.handleItemClick}
        />
        <Menu.Item
          name="friends"
          active={activeItem === 'friends'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position="right">
          <Menu.Item>
            <Input icon="search" placeholder="Search..." />
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    )
  }
}

export default MainHeader
