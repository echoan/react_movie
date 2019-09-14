import React from 'react'
//导入样式
import styles from '@/css/movieitem.scss'

//导入antd的评分的组件
import { Rate } from 'antd'

export default class Movieitem extends React.Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        return <div className={styles.box} onClick = {this.goDetail}>
           <img src={this.props.images.small} alt={this.props.alt} className={styles.img}/>
           <h4>电影名称：{this.props.title}</h4>
           <h4>上映年份：{this.props.year}年</h4>
           <h4>电影名称：{this.props.genres}</h4>
           <Rate disabled defaultValue={this.props.rating.average/2}/>
        </div>
    }
    goDetail=()=>{
        //console.log(this.props);
        //console.log(this.props.history);
        this.props.history.push('/movie/detail/'+this.props.id)
    }
}