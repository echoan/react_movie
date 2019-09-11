import React from 'react'

//导入第三方包fetch-jsonp,用于解决请求数据的跨域
import fetchJSONP from 'fetch-jsonp'

//导入Movieitem组件
import Movieitem from '@/components/Movie/Movieitem'

//导入antd的加载中的组件
import { Spin, Alert } from 'antd'

export default class Movelist extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            movies:[],//初始化时电影数组
            nowPage:parseInt(props.match.params.page)||1,//初始化时显示第几页
            pageSize:14,//初始化时每页显示的数据条数
            total:0, //初始化时当前分类下数据总条数
            isLoading:true,//建立一个标志，根据该标志来决定loading组件的显示与否
            movieTypes:props.match.params.type//每次请求数据根据这个标志请求不同类型的电影数据
        }
    }
    //在react中，我们可以来使用fetch API来获取数据，它是基于Promise来封装的
    //使用fetch API来获取数据的时候，第一个.then中是获取不到数据的，但可以得到一个Response对象，我们通过调用response.json()来得到一个新的promise，然后在第二个.then中得到数据。
    UNSAFE_componentWillMount(){
        //默认的window.fetch同样也会受到跨域的限制，直接使用会报错，这时候，我们可以使用第三方的包fetch-jsonp来发送JSONP请求，其用法和内置的jsonp是完全一致兼容的
        //一个fetch请求的实例
        // fetch('http://vue.studyit.io/api/getlunbo').then(response=>response.json()).then(data=>{
        //     console.log(data)
        // })
        const start = this.state.pageSize*(this.state.nowPage-1)
        const urldata = `http://douban.uieee.com/v2/movie/${this.state.movieTypes}?start=${start}&count=${this.state.pageSize}`
        //请求豆瓣接口地址拿到正在上映的电影的数据
        this.loadMovieListByTypeAndPage(urldata);


        // setTimeout(() => {
        //     this.setState({
        //         isLoading:false
        //     })
        // }, 1000);

    }
    componentWillReceiveProps(nextProps){
        //当监测到
        this.setState({
            nowPage:parseInt(nextProps.match.params.page)||1,
            isLoading:true,
            movieTypes:nextProps.match.params.type
        })
    }
    render(){
        // console.log(this.props.match.params)
        return <div>{this.renderList()}</div>
    }
    //定义请求正在热映的电影的数据
    loadMovieListByTypeAndPage=(url)=>{
        fetchJSONP(url).then(response=>response.json()).then(data=>{
            console.log(data);
            if(data){
                this.setState({
                    isLoading:false,//数据请求到之后，改变loading显示的标志为false，进而关闭掉loading
                    movies:data.subjects,//为初始化时的movies重新赋值
                    total:data.total//获取数据总条数
                })
            }
        })
    }
    renderList=()=>{
        if(this.state.isLoading){
            return <Spin tip="Loading...">
                        <Alert
                        message="正在加载电影列表"
                        description="请稍后"
                        type="info"
                        />
                </Spin>
        }else{
            return <div style={{display:'flex',flexWrap:'wrap'}}>
                {this.state.movies.map(item=>{
                    return <Movieitem {...item} key={item.id}></Movieitem>
                })}
            </div>
        }
    }
}