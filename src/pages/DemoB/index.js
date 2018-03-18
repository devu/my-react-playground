import React, { Component } from 'react'

import { Grid, Header, Segment } from 'semantic-ui-react'
import ContainerA from './components/ClassA'
import ContainerC from './components/ClassC'

const style = {
  h1: {
    marginTop: '1px'
  },
}

class DemoB extends Component {
  constructor() {
    super()
    this.state = {
      user: 'testUser',
      data: {
        status: 'valid'
      }
    }
  }

  async componentDidMount() {
    console.log('Demo B::componentDidMount')
  }

  render() {
    return (
      <Segment>
        <Header as="h1" content="Demo B" style={style.h1} textAlign="center" />
        <Grid columns={2}>
          <Grid.Column>
            <ContainerA user={this.state.user} />
          </Grid.Column>
          <Grid.Column>
            <ContainerC data={this.state.data} />
          </Grid.Column>
        </Grid>
      </Segment>
    )
  }
}

export default DemoB
