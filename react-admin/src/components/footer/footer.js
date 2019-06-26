import React, {Component} from 'react'
import './footer.less'

export default class Footer extends Component {
    constructor(props) {
        super(props)
        this.state= {

        }
    }
    render() {
        return(
            <div className='footer_container'>
                Ant Design ©2018 Created by Ant UED
            </div>
        )
    }
}