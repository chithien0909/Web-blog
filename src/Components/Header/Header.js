import React, {Component} from 'react';
import './Header.css';
import {Link} from 'react-router-dom';
import {Menu, Icon, Button} from 'antd';
export default class Header extends Component{
    constructor(props){
        super(props);
        this.state = {
            collapsed: false,
        };
        this.toggleCollapsed = this.toggleCollapsed.bind(this);

    }
    toggleCollapsed = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    };
    render() {
        return(

            <div className='Header'>
                <div style={{ width: 256 }}>
                    <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                        <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
                    </Button>
                    <Menu
                        defaultSelectedKeys={['1']}
                        defaultOpenKeys={['sub1']}
                        mode="inline"
                        theme="dark"
                        inlineCollapsed={this.state.collapsed}
                    >
                        <Menu.Item key="1">
                            <Link to='/'>
                                <Icon type="home" />
                                <span >Home</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="2">
                            <Link to='/about'>
                                <Icon type="info-circle" />
                                <span>About</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="3">
                            <Link to='/shop'>
                                <Icon type="shopping" />
                                <span>Shop</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="4">
                            <Link to='/login'>
                                <Icon type="login" />
                                <span>Login</span>
                            </Link>
                        </Menu.Item>
                        <Menu.Item key="5">
                            <Link to='/contact'>
                                <Icon type="contacts" />
                                <span>Contact</span>
                            </Link>
                        </Menu.Item>

                    </Menu>
                </div>
            </div>
        );
    }
}