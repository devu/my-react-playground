import React from 'react'

import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { menu } from './constants'

import DemoA from './pages/DemoA'
import DemoB from './pages/DemoB'
import StateManager from './pages/StateManager'
import Alpaca from './pages/Alpaca'

const routes = [
  {
    path: '/',
    exact: true,
    sidebar: () => (
      <Menu.Item name={menu.HOME}>
        <Link to={'/'}>{menu.HOME}</Link>
      </Menu.Item>
    ),
    main: () => (<div>Main</div>)
  },
  {
    path: '/demo-a',
    sidebar: () => (
      <Menu.Item name={menu.DEMO_A}>
        <Link to={'/demo-a'}>{menu.DEMO_A}</Link>
      </Menu.Item>
    ),
    main: DemoA
  },
  {
    path: '/demo-b',
    sidebar: () => (
      <Menu.Item name={menu.DEMO_B}>
        <Link to={'/demo-b'}>{menu.DEMO_B}</Link>
      </Menu.Item>
    ),
    main: DemoB
  },
  {
    path: '/state-manager',
    sidebar: () => (
      <Menu.Item name={menu.DEMO_B}>
        <Link to={'/state-manager'}>{menu.STATE_MANAGER}</Link>
      </Menu.Item>
    ),
    main: StateManager
  },
  {
    path: '/alpaca',
    sidebar: () => (
      <Menu.Item name={menu.ALPACA}>
        <Link to={'/alpaca'}>{menu.ALPACA}</Link>
      </Menu.Item>
    ),
    main: Alpaca
  }
]

export default routes
