import React from 'react'
import './Navigation.css'
import Logo from '../../logos/logo.png'
import { Icon } from 'antd';

const Navigation = () => {
    return (
        <nav>
            <Icon type="history" style={{ fontSize: '20px', color: 'white' }}/>
            <span className='main'>
                <p className='app-name'>وين ناكل</p>
                <img src={Logo} alt='logo' />
            </span>
            <Icon type="menu" style={{ fontSize: '20px', color: 'white' }}/>
        </nav>
    )
}

export default Navigation;