import React, { Component } from 'react'

import { Grid, Segment, Label } from 'semantic-ui-react'
import ClassD from '../ClassD/ClassD'

class ClassDContainer extends Component {
  constructor() {
    super()
    this.state = {}
  }

  async componentDidMount() {
    console.log('ClassDContainer::componentDidMount')
  }

  render() {
    return (
      <Segment>
        <Label pointing="below">ClassD Container</Label>
        <Grid columns={1}>
          <Grid.Column>
            <ClassD name="Class D" />
          </Grid.Column>
        </Grid>
      </Segment>
    )
  }
}

export default ClassDContainer
