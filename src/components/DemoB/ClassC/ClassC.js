import React from 'react'
import PropTypes from 'prop-types'

import { Segment } from 'semantic-ui-react'

const ClassC = ({ name }) => (
  <Segment>
    {name}
  </Segment>
)

ClassC.propTypes = {
  name: PropTypes.string
}

ClassC.defaultProps = {
  name: ''
}

export default ClassC
