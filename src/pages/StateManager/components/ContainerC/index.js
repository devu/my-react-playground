/* eslint no-console: 0, no-plusplus: 0 */

import React from 'react'
import { Grid } from 'semantic-ui-react'
import SomeItem from './SomeItem'

class ContainerC extends React.Component {
  constructor() {
    super()
    this.state = {
      items: this.generateItems()
    }
  }

  generateItems = () => {
    const items = []
    for (let i = 0; i < 100; i++) {
      items.push(`Item ${i}`)
    }
    return items
  }

  render() {
    return (
      <Grid columns={16} stackable>
        {this.state.items.map(item => <SomeItem key={item} title={item} />)}
      </Grid>
    )
  }
}

export default ContainerC
