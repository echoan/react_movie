import React from 'react'
//引入fetchJSONP来请求电影详情信息
import fetchJSONP from 'fetch-jsonp'
//导入antd的返回按钮
import { Button, Radio, Icon,Spin, Alert } from 'antd'

//导入电影详情页的样式
import styles from '@/css/Moviedetail.scss'
//console.log(styles);


export default class Moviedetail extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            info:{},
            isLoading:true
        }
    }
    UNSAFE_componentWillMount(){
        const urldetail = 'http://douban.uieee.com/v2/movie/subject/'+this.props.match.params.id;
        fetchJSONP(urldetail).then(response=>response.json()).then(data=>{
            //console.log(data)
            this.setState({
                isLoading:false,
                info:data
            })
        })
    }
    render(){
        return <div>
            <Button type="primary" onClick={this.getBack}>
                <Icon type="left" />
                返回列表
            </Button>
            {this.renderDetail()}
           
        </div>
    }
    getBack = () =>{
        //console.log(this.props)
        this.props.history.go(-1)
    }
    renderDetail=()=>{
        if(this.state.isLoading){
            return <Spin tip="Loading...">
                        <Alert
                        message="正在加载电影简介"
                        description="请稍后"
                        type="info"
                        />
                    </Spin>
        }else{
            return <div>
                <div className={styles.outerdiv}>
                    <h3>{this.state.info.title}</h3>
                    <img src={this.state.info.images.small} alt={this.state.info.alt} className={styles.img}/>
                </div>
               <p className={styles.summaryp}>{this.state.info.summary}</p>
            </div>
        }
    }
}