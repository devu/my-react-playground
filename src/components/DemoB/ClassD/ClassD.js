import React from 'react'
import PropTypes from 'prop-types'

import { Segment } from 'semantic-ui-react'

const ClassD = ({ name }) => (
  <Segment>
    {name}
  </Segment>
)

ClassD.propTypes = {
  name: PropTypes.string
}

ClassD.defaultProps = {
  name: ''
}

export default ClassD
