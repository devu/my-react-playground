/* eslint no-console: 0 */
import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import BixBite from '../../api'
import ContainerA from './components/ContainerA'
import ContainerB from './components/ContainerB'
// import ContainerC from './components/ContainerC'
// import ContainerD from './components/ContainerD'
import { DEFAULT_CORE } from './constants'

import ColorControler from './controlers/ColorControler'
import TextControler from './controlers/TextControler'
import DealsControler from './controlers/DealsControler'
import DealsDataService from './data/DealsDataService'

class StateManager extends Component {
  constructor() {
    super()

    BixBite.spawnCore(DEFAULT_CORE, true)
    BixBite.registerDataService(DealsDataService)

    BixBite.registerControler(ColorControler)
    BixBite.registerControler(TextControler)
    BixBite.registerControler(DealsControler)
  }

  render() {
    return (
      <Container>
        <ContainerA />
        <ContainerB />
      </Container>
    )
  }
}

export default StateManager
