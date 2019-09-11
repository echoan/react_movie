import React from 'react'
//导入路由模块
import {Route,Link} from 'react-router-dom'

//在电影组件添加antd的layout带侧边栏的布局
import { Layout, Menu, Icon } from 'antd';

//导入电影列表组件
import Movielist from '@/components/Movie/Movielist'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default class Movie extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        return <Layout style={{height:'100%'}}>
            <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                mode="inline"
                defaultSelectedKeys={['1']}
                style={{ height: '100%', borderRight: 0 }}
                >
                    <Menu.Item key="1">
                        <Link to='/movie/in_theaters/1'>正在热映</Link>
                    </Menu.Item>
                    <Menu.Item key="2">
                        <Link to='/movie/coming_soon/1'>即将上映</Link>
                    </Menu.Item>
                    <Menu.Item key="3">
                        <Link to='/movie/top250/1'>Top250</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout style={{ paddingLeft:'2px' }}>
                <Content style={{background: '#fff',padding:10,margin: 0,minHeight: 280,}}>
                       <Route path='/movie/:type/:page' component = {Movielist}></Route>
                </Content>
            </Layout>
    </Layout>
    }
}