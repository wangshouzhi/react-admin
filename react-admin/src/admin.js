import React, {Component} from 'react'
import { Layout } from 'antd'
import './assets/style/common.less'
import Header from './components/header/header'
import Footer from './components/footer/footer'
import Navleft from './components/navleft/navleft'
const {  Content ,} = Layout;
export default class Admin extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: false,
        };
    }
   
   
    render() {
        return(
            <div className='admin_container'>
                <Layout>
                    
                    <Navleft></Navleft>
                    <Layout>
                        <Header style={{ background: '#fff', padding: 0 }}>
                            
                        </Header>
                        <Content
                            style={{
                            margin: '24px 16px',
                            padding: 24,
                            background: '#fff',
                            minHeight: 280,
                            }}
                        >
                            Content
                        </Content>
                        <Footer></Footer>
                    </Layout>
                </Layout>
            </div>
            
            
        )
    }
}
