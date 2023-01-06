import React, { Component } from 'react';

import NavItem from './NavItem'
import { NAV } from '@/config/config.js'

import './index.scss'

export default class SlideBar extends Component {
  render() {
    const { curIdx, onNavItemClick } = this.props;
    return (
      <aside className="side-bar">
        {
          NAV.map((item, index) => {
            return (
              <NavItem
                key={index}
                index={index}
                dataItem={item}
                curIdx={curIdx}
                onNavItemClick={onNavItemClick}
              >
              </NavItem>
            )
          })
        }
      </aside>
    )
  }
}
