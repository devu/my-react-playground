import React, { Component } from 'react'

import { Grid, Segment, Label } from 'semantic-ui-react'
import ClassC from './ClassC'
import ClassD from '../ClassD/ClassD'

class ClassCContainer extends Component {
  constructor() {
    super()
    this.state = {}
  }

  async componentDidMount() {
    console.log('ClassCContainer::componentDidMount')
  }

  render() {
    return (
      <Segment>
        <Label pointing="below">ClassC Container</Label>
        <Grid columns={2} stackable>
          <Grid.Column>
            <ClassC name="Class C" />
          </Grid.Column>
          <Grid.Column>
            <ClassD name="Class D" />
          </Grid.Column>
        </Grid>
      </Segment>
    )
  }
}

export default ClassCContainer
