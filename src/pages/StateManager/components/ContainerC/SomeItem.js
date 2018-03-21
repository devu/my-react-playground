/* eslint no-console: 0 */

import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'semantic-ui-react'

import BixBite from '../../../../api'
import { COLOR_UPDATED } from '../../constants'

class SomeItem extends React.Component {
  constructor() {
    super()
    this.state = {
      color: 'orange'
    }

    BixBite.connect(this)
    this.addSlot(COLOR_UPDATED, this.onColorUpdate)
  }

  onColorUpdate = ({ color }) => {
    this.setState({ color })
  }

  render() {
    return (
      <Button size={'mini'} color={this.state.color}>
        {this.props.title}
      </Button>
    )
  }
}

SomeItem.propTypes = {
  title: PropTypes.string.isRequired
}

export default SomeItem
