import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import Async from 'react-code-splitting'

import { Body } from './Styled'

const Root = () => <Async load={import('./Root')} />

const App = () => (
  <Body>
    <Root />
  </Body>
)

export default withRouter(connect()(App))

