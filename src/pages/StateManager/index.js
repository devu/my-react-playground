/* eslint no-console: 0 */
import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import BixBite from '../../api'
import ContainerA from './components/ContainerA'
import ContainerB from './components/ContainerB'
import ContainerC from './components/ContainerC'
import ContainerE from './components/ContainerE'
import { cores } from './constants'

import DefaultControler from './controlers/DefaultControler'
import DealsControler from './controlers/DealsControler'
import DealsDataService from './data/DealsDataService'

class StateManager extends Component {
  constructor() {
    super()

    const { DEFAULT } = cores
    BixBite.spawnCore(DEFAULT)
    BixBite.registerDataService(DEFAULT, DealsDataService)

    BixBite.registerControler(DEFAULT, DefaultControler)
    BixBite.registerControler(DEFAULT, DealsControler)
  }

  render() {
    return (
      <Container>
        <ContainerA />
        <ContainerB />
        <ContainerC />
        <ContainerE />
      </Container>
    )
  }
}

export default StateManager
