import React from 'react'
import PropTypes from 'prop-types'

import { Segment } from 'semantic-ui-react'

const ClassB = ({ name }) => (
  <Segment>
    {name}
  </Segment>
)

ClassB.propTypes = {
  name: PropTypes.string
}

ClassB.defaultProps = {
  name: ''
}

export default ClassB
