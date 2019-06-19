import React, {Component} from 'react'
import { Row, Col  } from 'antd'
import './assets/style/common.less'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Navleft from './components/navleft/navleft'

export default class Admin extends Component {
    render() {
        return(
            <Row className='container'>
                <Col span={3} className='nav_left'><Navleft></Navleft></Col>
                <Col span={21} className='main_right'>
                     <Header></Header>
                     <Row>content</Row>
                     <Footer></Footer>
                </Col>
            </Row>
        )
    }
}
