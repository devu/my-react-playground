import React from 'react'

import { Menu } from 'semantic-ui-react'
import { Link } from 'react-router-dom'
import { menu } from './constants'

import DemoA from './components/DemoA'
import DemoB from './components/DemoB'

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
    path: '/demoA',
    sidebar: () => (
      <Menu.Item name={menu.DEMO_A}>
        <Link to={'/demoA'}>{menu.DEMO_A}</Link>
      </Menu.Item>
    ),
    main: DemoA
  },
  {
    path: '/demoB',
    sidebar: () => (
      <Menu.Item name={menu.DEMO_B}>
        <Link to={'/demoB'}>{menu.DEMO_B}</Link>
      </Menu.Item>
    ),
    main: DemoB
  }
]

export default routes
