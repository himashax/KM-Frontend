import React, { Component } from 'react';
import { Link } from "react-router-dom"
import { Layout, Menu, Input, Space } from 'antd';
const { Header, Content, Footer } = Layout;
const { Search } = Input;


class Navigation extends Component {

    handleClick = e => {
        console.log('click ', e);
        this.setState({ current: e.key });
      };

    render() { 
        return (

            <Menu onClick={this.handleClick} mode="horizontal" defaultSelectedKeys={['1']}>
                    <Menu.Item key="1">
                        <Link to="/home">Home</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to="/inventory"> Inventory </Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to="/sales"> Sales </Link>
                    </Menu.Item>
                    <Menu.Item key="4">
                        <Link to="/employee"> Employee </Link>
                    </Menu.Item>
                    <Menu.Item key="5">
                        <Link to="/order_delivery"> Order Delivery </Link>
                    </Menu.Item>
                  </Menu>
            
        );
    }
}
 
export default Navigation;