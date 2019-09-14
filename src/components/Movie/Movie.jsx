import React from 'react'
//导入路由模块
import {Route,Link,Switch} from 'react-router-dom'

//在电影组件添加antd的layout带侧边栏的布局
import { Layout, Menu, Icon } from 'antd';

//导入电影列表组件
import Movielist from '@/components/Movie/Movielist'
//导入电影详情组件
import Moviedetail from '@/components/Movie/Moviedetail'

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

export default class Movie extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    UNSAFE_componentWillMount(){
        //console.log(window.location.hash)
    }
    render(){
        return <Layout style={{height:'100%'}}>
            <Sider width={200} style={{ background: '#fff' }}>
                <Menu
                mode="inline"
                defaultSelectedKeys={[window.location.hash.split('/')[2]]}
                style={{ height: '100%', borderRight: 0 }}
                >
                    <Menu.Item key="in_theaters">
                        <Link to='/movie/in_theaters/1'>正在热映</Link>
                    </Menu.Item>
                    <Menu.Item key="coming_soon">
                        <Link to='/movie/coming_soon/1'>即将上映</Link>
                    </Menu.Item>
                    <Menu.Item key="top250">
                        <Link to='/movie/top250/1'>Top250</Link>
                    </Menu.Item>
                </Menu>
            </Sider>
            <Layout style={{ paddingLeft:'2px' }}>
                <Content style={{background: '#fff',padding:10,margin: 0,minHeight: 280,}}>
                        {/* 注意：哪怕为 路由启用了 exact 精确匹配模式，也会从上到下，把所有的 路由规则匹配一遍,这时候就需要使用switch*/}
                        {/* 使用 路由中的 Switch 组件，能够指定，如果前面的路由规则优先匹配到了，则放弃匹配后续的路由 */}
                        <Switch>
                        
                            <Route exact path='/movie/detail/:id' component = {Moviedetail}></Route>
                            <Route exact path='/movie/:type/:page' component = {Movielist}></Route>
                            
                        </Switch>
                </Content>
            </Layout>
    </Layout>
    }
}