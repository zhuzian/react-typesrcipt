import { Layout, Menu } from 'antd';
import React, { useState } from 'react';
import {
    MenuUnfoldOutlined,
    MenuFoldOutlined,
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
} from '@ant-design/icons';

import './home.less'
import { Redirect, Route, Router, Switch, useHistory, withRouter } from 'react-router-dom';
import HomeInfo from '../HomeInfo';
import SideBar from '../SideBarNav';


const { Header, Sider, Content } = Layout

interface IProps {

}

const Home = (props: IProps) => {


    const [collapsed, setCollapsed] = useState(false)


    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <SideBar />
            </Sider>

            <Layout className="site-layout">
                <Header className="site-layout-background" style={{ padding: 0 }}>
                    {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                        className: 'trigger',
                        onClick: () => { setCollapsed(!collapsed) }
                    })}
                </Header>

                <Content className="site-layout-background"
                    style={{
                        margin: "24px 16px",
                        padding: 24,
                        minHeight: 280,
                    }}>


                        <Switch> 
                            <Route path="/home/info" component={HomeInfo}></Route>
                        </Switch>




                </Content>
            </Layout>
        </Layout>
    )
}

export default Home