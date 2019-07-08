import React,{ Component } from 'react';
import './button.less';
import {Card, Button} from 'antd'

export default class Buttons extends Component {
  render() {
    return(
      <div>
          <Card title="基础按钮">
            <Button type='primary'>primary</Button>
            <Button >default</Button>
            <Button type='dashed'>dashed</Button>
            <Button type='danger'>danger</Button>
          </Card>
      </div>
    )
  }
}
