import React from 'react'
import {HashRouter,Route,Link} from 'react-router-dom'

//导入antd的layout组件
import { Layout, Menu, Breadcrumb } from 'antd'
const { Header, Content, Footer } = Layout

//导入app.scss
import styles from '@/css/app.scss'

//导入组件Home/Movie/About
import Home from '@/components/Home/Home'
import Movie from '@/components/Movie/Movie'
import About from '@/components/About/About'

export default class App extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    UNSAFE_componentWillMount(){
        //console.log(window.location.hash)
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
                            defaultSelectedKeys={[window.location.hash.split('/')[1]]}
                            style={{ lineHeight: '64px'}}
                        >
                            <Menu.Item key="home">
                                <Link to="/home">首页</Link>
                            </Menu.Item>
                            <Menu.Item key="movie">
                                <Link to="/movie/in_theaters/1">电影</Link>
                            </Menu.Item>
                            <Menu.Item key="about">
                                <Link to="/about">关于</Link>
                            </Menu.Item>
                        </Menu>
                    </Header>

                    {/* content区域 */}
                    <Content style={{background:'#fff'}}>
                       {/* 添加路由规则 */}
                        <Route path="/home" component={Home}></Route>
                        <Route path="/movie" component={Movie}></Route>
                        <Route path="/about" component={About}></Route>
                    </Content>
                    {/* footer区域 */}
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
        </HashRouter>
    }
}