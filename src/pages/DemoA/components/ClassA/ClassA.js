import React from 'react'
import PropTypes from 'prop-types'

import { Segment } from 'semantic-ui-react'

const ClassA = ({ name }) => (
  <Segment>
    {name}
  </Segment>
)

ClassA.propTypes = {
  name: PropTypes.string
}

ClassA.defaultProps = {
  name: ''
}

export default ClassA
