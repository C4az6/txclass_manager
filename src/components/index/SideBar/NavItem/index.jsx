import { Component } from 'react';
import { Link } from 'react-router-dom'
import './index.scss'

export default class NavItem extends Component {
  render() {
    const { index, curIdx, dataItem, onNavItemClick } = this.props;
    return (
      <div className={['nav-item', index === curIdx ? 'nav-current' : ''].join(' ')}>
        <Link
          to={`/${dataItem.field}`}
          onClick={() => onNavItemClick(dataItem, index)}
        >
          {dataItem.title}
          <i className='iconfont icon-arrow-right'></i>
        </Link>
      </div>
    )
  }
}