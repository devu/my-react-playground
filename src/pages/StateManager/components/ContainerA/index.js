/* eslint no-console: 0 */

import React from 'react'
import { Button, Grid, Segment } from 'semantic-ui-react'

import BixBite from '../../../../api'
import { COLOR_UPDATED, TEXT_UPDATED, UPDATE_COLOR } from '../../constants'

class ContainerA extends React.Component {
  constructor() {
    super()
    this.state = {
      color: 'orange',
      text: 'ContainerA'
    }

    BixBite.connect(this)
    this.addSlot(TEXT_UPDATED, this.onTextUpdate)
    this.addSlot(COLOR_UPDATED, this.onColorUpdate)
  }

  onTextUpdate = ({ text }) => {
    this.setState({ text })
  }

  onColorUpdate = ({ color }) => {
    this.setState({ color })
  }

  updateColor = () => {
    this.sendSignal(UPDATE_COLOR, this.state)
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
