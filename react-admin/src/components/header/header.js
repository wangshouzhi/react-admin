import React, { Component } from 'react'
import './header.less'
import {Row, Col, Button,Icon} from 'antd'

export default class Header extends Component {
    constructor(props) {
        super(props)
        this.state= {

        }
    }
    render() {
        return(
            <div className='header_container'>
               <Row span="24" className="header_top">
                   <Col>Header </Col>
               </Row>
               <Row span="24" className="menu_crumb" >
                   <Col>
                       <Button size='small'><Icon type="left" /></Button>
                       <span>首页</span>
                       <Button size='small'><Icon type="right" /></Button>
                       <Button size="small"><Icon type="close" /></Button>
                   </Col>
               </Row>
            </div>
        )
    }
}