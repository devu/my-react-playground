import React, { Component } from 'react'

import { Grid, Segment, Label } from 'semantic-ui-react'
import ClassA from './ClassA'
import ClassB from '../ClassB/ClassB'

class ClassAContainer extends Component {
  constructor() {
    super()
    this.state = {
      test: 'test'
    }
  }

  async componentDidMount() {
    console.log('ClassDContainer::componentDidMount')
  }

  render() {
    return (
      <Segment>
        <Label pointing="below">ClassA Container</Label>
        <Grid columns={2} stackable>
          <Grid.Column>
            <ClassA name="Class A" />
          </Grid.Column>
          <Grid.Column>
            <ClassB name="Class B" />
          </Grid.Column>
        </Grid>
      </Segment>
    )
  }
}

export default ClassAContainer
