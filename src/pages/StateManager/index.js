/* eslint no-console: 0 */
import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import BixBite from '../../api'
import ContainerA from './components/ContainerA'
import ContainerB from './components/ContainerB'
// import ContainerC from './components/ContainerC'
// import ContainerD from './components/ContainerD'
import { DEFAULT_CORE } from './constants'

import DealsDataService from './data/DealsDataService'
import Controlers from './controlers'

class StateManager extends Component {
  constructor() {
    super()

    BixBite.spawnCore(DEFAULT_CORE, true)

    BixBite.registerService(DealsDataService)
    BixBite.registerControlers(Controlers)
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
