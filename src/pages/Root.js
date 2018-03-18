/* eslint no-console: 0 */

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Route, Switch, withRouter, Link } from 'react-router-dom'

import { Sidebar, Segment, Grid, Header, Menu, Button } from 'semantic-ui-react'
import routes from '../routes'
import { menu } from '../constants'

const style = {
  h1: {
    marginTop: '1px'
  }
}

class Root extends Component {
  constructor() {
    super()
    this.state = {
      visible: false,
      activeItem: 'home'
    }
  }

  async componentDidMount() {
    console.log('Root::componentDidMount')
  }

  toggleVisibility = () => {
    this.setState({ visible: !this.state.visible })
  }

  render() {
    const { visible } = this.state
    const { HOME, DEMO_A, DEMO_B, STATE_MANAGER } = menu

    return (
      <div style={{ height: '800px' }} >
        <Grid columns={2}>
          <Grid.Column width={3} floated="left">
            <Button onClick={this.toggleVisibility}>Toggle Menu</Button>
          </Grid.Column>
          <Grid.Column width={10} textAlign="center">
            <Header as="h1" content="React Playground" style={style.h1} textAlign="center" />
          </Grid.Column>
          <Grid.Column width={3} floated="right">
            <Button onClick={this.toggleVisibility}>Toggle Menu</Button>
          </Grid.Column>
        </Grid>

        <Sidebar.Pushable as={Segment}>
          <Sidebar
            as={Menu}
            animation="slide along"
            width="thin"
            visible={visible}
            icon="labeled"
            vertical
            inverted
          >
            <Menu.Item>
              <Menu.Header>Architecture</Menu.Header>
              <Menu.Menu>
                <Menu.Item name={HOME}>
                  <Link to={'/'}>{HOME}</Link>
                </Menu.Item>
                <Menu.Item name={DEMO_A}>
                  <Link to={'/demo-a'}>{DEMO_A}</Link>
                </Menu.Item>
                <Menu.Item name={DEMO_B}>
                  <Link to={'/demo-b'}>{DEMO_B}</Link>
                </Menu.Item>
                <Menu.Item name={STATE_MANAGER}>
                  <Link to={'/state-manager'}>{STATE_MANAGER}</Link>
                </Menu.Item>
              </Menu.Menu>
            </Menu.Item>
          </Sidebar>

          <Sidebar.Pusher>
            <Segment basic>
              <Switch>
                {routes.map(({ path, exact, main }) => (
                  <Route key={path} path={path} exact={exact} component={main} />
                ))}
              </Switch>
            </Segment>
          </Sidebar.Pusher>

        </Sidebar.Pushable>
      </div>
    )
  }
}

export default withRouter(connect()(Root))
