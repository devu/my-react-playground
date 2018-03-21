/* eslint no-return-assign: 0, no-console: 0 */

import React from 'react'
import { Grid, Container } from 'semantic-ui-react'
import BixBite from '../../../api'
import { ON_INITIALISED } from '../constants'

class Main extends React.Component {
  constructor() {
    super()
    this.state = {
      initialised: false
    }

    BixBite.connect(this)
    this.addSlot(ON_INITIALISED, () => {
      console.log('Main::', ON_INITIALISED)
      this.setState({ initialised: true })
    })
  }

  render() {
    return (
      <Container>
        <Grid columns={2} stackable>
          Content
        </Grid>
      </Container>
    )
  }
}

export default Main
