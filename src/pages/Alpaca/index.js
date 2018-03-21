/* eslint no-console: 0 */
import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'

import BixBite from '../../api'
import { MAIN, INITIALISE } from './constants'

import Main from './components/Main'
import MainHeader from './components/MainHeader'
import MockAPI from './services/MockAPI'
import Startup from './controlers/Startup'

class Alpaca extends Component {
  constructor() {
    super()

    BixBite.spawnCore(MAIN, true)

    BixBite.registerDataService(MockAPI)
    BixBite.registerControler(Startup)
  }

  componentDidMount() {
    console.log('Alpaca::componentDidUpdate')
    BixBite.sendSignal(INITIALISE)
  }

  render() {
    return (
      <div>
        <MainHeader />
        <Container>
          <Main />
        </Container>
      </div>
    )
  }
}

export default Alpaca
