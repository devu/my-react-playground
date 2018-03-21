/* eslint no-console: 0 */

import React from 'react'
import { Button, Grid, Segment } from 'semantic-ui-react'

import BixBite from '../../../../api'
import { COLOR_UPDATED, TEXT_UPDATED, UPDATE_TEXT } from '../../constants'

class ContainerB extends React.Component {
  constructor() {
    super()
    this.state = {
      color: 'orange',
      text: 'ContainerB'
    }

    BixBite.connect(this)
    this.addSlot(TEXT_UPDATED, this.onTextUpdate)
    this.addSlot(COLOR_UPDATED, this.onColorUpdate)
  }

  onTextUpdate = ({ extraWord }) => {
    this.setState({ text: extraWord })
  }

  onColorUpdate = ({ color }) => {
    this.setState({ color })
  }

  updateText = () => {
    this.sendSignal(UPDATE_TEXT)
  }

  render() {
    return (
      <Segment>
        <Grid columns={2} stackable>
          <Grid.Column>
            <div> {this.state.text} </div>
          </Grid.Column>
          <Grid.Column>
            <Button color={this.state.color} onClick={() => this.updateText()}>
              Update text
            </Button>
          </Grid.Column>
        </Grid>
      </Segment>
    )
  }
}

export default ContainerB
