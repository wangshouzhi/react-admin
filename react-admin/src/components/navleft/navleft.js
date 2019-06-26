import React, { Component } from 'react'
import './navleft.less'
import { Menu,Icon, Layout } from 'antd'

const { SubMenu } = Menu;
const { Sider} = Layout


export default class Navleft extends Component {
    constructor(props) {
        super (props)
        this.state= {
          collapsed: false,
   
        }
    }

    toggle = () => {
      this.setState({
          collapsed: !this.state.collapsed,
      });
    };
    render() {
        
        return(
            
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
              <div className="nav_logo" >
              <Icon
                  className="nav_trigger"
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggle}/>
                <div className='nav_img'></div>
              </div>
              <Menu.Item key="1">
                <Icon type="pie-chart" />
                <span>Option 1</span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="desktop" />
                <span>Option 2</span>
              </Menu.Item>
              <SubMenu
                key="sub1"
                title={
                  <span>
                    <Icon type="user" />
                    <span>User</span>
                  </span>
                }
              >
                <Menu.Item key="3">Tom</Menu.Item>
                <Menu.Item key="4">Bill</Menu.Item>
                <Menu.Item key="5">Alex</Menu.Item>
              </SubMenu>
              <SubMenu
                key="sub2"
                title={
                  <span>
                    <Icon type="team" />
                    <span>Team</span>
                  </span>
                }
              >
                <Menu.Item key="6">Team 1</Menu.Item>
                <Menu.Item key="8">Team 2</Menu.Item>
              </SubMenu>
              <Menu.Item key="9">
                <Icon type="file" />
                <span>File</span>
              </Menu.Item>
            </Menu>
          </Sider>
        )
    }
}