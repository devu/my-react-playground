/* eslint no-console: 0 */

import React from 'react'
import { Segment, Grid, Input, Divider } from 'semantic-ui-react'

import BixBite from '../../../../api'
import { signals, cores } from '../../constants'

class ContainerE extends React.Component {
  constructor() {
    super()
    this.state = {
      loading: true,
      deal: null,
      dealId: 1
    }

    BixBite.connect(cores.DEFAULT, this)
    this.addSlot(signals.ON_DEALS_DATA, this.onServiceReady)
    this.addSlot(signals.ON_DEAL_DATA, this.onDealData)
  }

  onServiceReady() {
    this.getDeal(this.state.dealId)
  }

  onDealData = deal => {
    this.setState({ loading: false, deal })
  }

  onInputChanged = (e, data) => {
    const id = parseInt(data.value, 10)
    this.setState({ dealId: id })
    this.getDeal(id)
  }

  getDeal = id => {
    this.sendSignal(signals.GET_DEAL_BY_ID, { id })
  }

  render() {
    const { loading, deal, dealId } = this.state
    return (
      <Segment loading={loading}>
        <Input
          label={{ basic: true, content: 'ID' }}
          labelPosition="right"
          placeholder="Enter ID"
          value={dealId}
          onChange={(e, data) => this.onInputChanged(e, data)}
        />
        <Grid columns={2} stackable>
          <Grid.Column width={1} align="left">
            <div> ID:</div>
          </Grid.Column>
          <Grid.Column width={2} align="left">
            <div> NAME:</div>
          </Grid.Column>
          <Grid.Column width={6} align="left">
            <div> DESCRIPTION:</div>
          </Grid.Column>
        </Grid>
        <Divider />
        {deal && (
          <Grid columns={2} stackable>
            <Grid.Column width={1} align="left">
              <div> {deal.id} </div>
            </Grid.Column>
            <Grid.Column width={2} align="left">
              <div> {deal.name} </div>
            </Grid.Column>
            <Grid.Column width={6} align="left">
              <div> {deal.description} </div>
            </Grid.Column>
          </Grid>
        )}
      </Segment>
    )
  }
}

export default ContainerE
