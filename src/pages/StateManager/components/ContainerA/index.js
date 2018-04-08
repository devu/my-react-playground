/* eslint no-console: 0 */

import React from 'react'
import { Button, Grid, Segment } from 'semantic-ui-react'

import BixBite from '../../../../api'
import { UPDATE_TEXT, UPDATE_COLOR } from '../../constants'

class ContainerA extends React.Component {
  constructor() {
    super()
    this.state = {
      color: 'orange',
      text: 'ContainerA'
    }

    BixBite.connect(this)
    this.on(UPDATE_TEXT, this.onTextUpdate)
    this.on(UPDATE_COLOR, this.onColorUpdate)
  }

  onTextUpdate = ({ text }) => {
    this.setState({ text })
  }

  onColorUpdate = ({ color }) => {
    this.setState({ color })
  }

  updateColor = () => {
    this.send(UPDATE_COLOR)
  }

  render() {
    return (
      <Segment>
        <Grid columns={2} stackable>
          <Grid.Column>
            <div> {this.state.text} </div>
          </Grid.Column>
          <Grid.Column>
            <Button color={this.state.color} onClick={() => this.updateColor()}>
              Update Color
            </Button>
          </Grid.Column>
        </Grid>
      </Segment>
    )
  }
}

export default ContainerA
