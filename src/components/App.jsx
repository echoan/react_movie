import React from 'react'
import {HashRouter,Route,Link} from 'react-router-dom'

//导入antd的layout组件
import { Layout, Menu, Breadcrumb } from 'antd'
const { Header, Content, Footer } = Layout

//导入app.scss
import styles from '@/css/app.scss'

export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        return <HashRouter>
                <Layout className="layout" style={{height:"100%"}}>

                    {/* header区域 */}
                    <Header>
                        <div className={styles.logo} />
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['1']}
                            style={{ lineHeight: '64px'}}
                        >
                            <Menu.Item key="1">首页</Menu.Item>
                            <Menu.Item key="2">电影</Menu.Item>
                            <Menu.Item key="3">关于</Menu.Item>
                        </Menu>
                    </Header>

                    {/* content区域 */}
                    <Content style={{background:'#fff'}}>
                       哈哈哈
                    </Content>

                    {/* footer区域 */}
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
        </HashRouter>
    }
}