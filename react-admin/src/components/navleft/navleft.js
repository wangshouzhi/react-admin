import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './navleft.less'
import { Menu,Icon, Layout } from 'antd'
import MenuData from '../../mock/menuConfig'
import { connect } from 'react-redux'
import { switchMenu } from '../../redux/action'
 // import Item from 'antd/lib/list/Item';

const { SubMenu } = Menu;
const { Sider} = Layout


class Navleft extends Component {
    constructor(props) {
        super (props)
        this.state= {
          collapsed: false,
          menuTreeNav: '',
          currentKey: ''
   
        }
    }
    // 周期函数调菜单数据
    componentWillMount() {
      let currentKey = window.location.hash.replace(/#|\?.*$/g, '')
        this.setState({
          menuTreeNav : this.renderMenu(MenuData),
          currentKey
        })
    }
    // 菜单渲染
    renderMenu =(data)=> {
        return data.map((item)=> {
          if(item.children){
            return (
              <SubMenu title={<span>
                                <Icon type="user" />
                                <span>{item.title}</span>
                              </span>} key={item.key}>
                { this.renderMenu(item.children) }
              </SubMenu>
            )
          }
          return  <Menu.Item  key={ item.key }>
                      <NavLink to={ "/admin" + item.key}>
                        <Icon type="user"></Icon>
                         <span>{item.title }</span>
                      </NavLink>
                  </Menu.Item>
        })
    };
    /** 
     * 左侧导航切换事件
    */
    menuClick = (item)=>{
      console.log(item.key)
      const { dispatch } =this.props
      dispatch(switchMenu())
      this.setState({
        currentKey: item.key
      })
    }
    /** 
     * 导航显示图标切换
    */
    toggle = () => {
      console.log("1")
      this.setState({
          collapsed: !this.state.collapsed,
      });
    };
    render() {
        
        return(
            
          <Sider trigger={null} collapsible collapsed={this.state.collapsed}>
            <Menu theme="dark" 
                  defaultSelectedKeys={[this.state.currentKey]} 
                  mode="inline"
                  onClick={this.menuClick}>
              <div className="nav_logo" >
              <Icon
                  className="nav_trigger"
                  type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                  onClick={this.toggle}/>
                <div className='nav_img'></div>
              </div>
              { this.state.menuTreeNav}
            
            </Menu>
          </Sider>
        )
    }
}
export default connect()(Navleft)