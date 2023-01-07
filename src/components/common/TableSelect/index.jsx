import React, { Component } from 'react';

import './index.scss';

export default class TableSelect extends Component {
  state = {
    // 是否展开列表的下拉菜单
    listShow: false,
    selectValue: ''
  }

  showList() {
    this.setState({
      listShow: !this.state.listShow
    })
  }

  onSelectChange(data, index) {
    this.setState({
      listShow: false,
      selectValue: data.title
    });
    this.props.onSelectChange(data, index);
  }

  componentDidMount() {
    this.setState({
      selectValue: this.props.defaultValue
    })
  }

  render() {
    const { fieldsData, selectIndex } = this.props,
      { listShow, selectValue } = this.state
    return (
      <div className="table-select">
        <div
          className="value-show"
          onClick={this.showList.bind(this)}
        >{selectValue}</div>
        <ul className={['option-list', listShow ? 'show' : ''].join(' ')}>
          {
            fieldsData.map((item, index) => {
              return (
                <li
                  key={index}
                  className="option-item"
                  onClick={
                    this.onSelectChange.bind(this, item, selectIndex)
                  }
                >
                  {item.title}
                </li>
              )
            })
          }
        </ul>
      </div>
    )
  }
}