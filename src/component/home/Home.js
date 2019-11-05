import React,{Component} from 'react';
import {HomeWrap,HomeLeft,HomeRight} from './homeStyle'
import List from './component/List';
import Topic from './component/Topic';
import Sine from './component/Sine';
import Scan from './component/Scan';
import axios from 'axios';
import {connect} from 'react-redux'
import Head from '../head/Head';
import Foot from '../foot/Foot'
class Home extends Component{
    render(){
        return(
            <div>
            <Head/>
            <HomeWrap>
                <HomeLeft>
                    <img src="//asset.ibanquan.com/s/30611/727/index_slide_2?v=1568268246_1572510848" alt=""/>
                    <Topic/>
                    <List/>
                </HomeLeft>
                <HomeRight>
                    <Sine/>
                    <Scan/>
                </HomeRight>
            </HomeWrap>
            <Foot/>
            </div>
        )
    }
componentDidMount(){
    axios.get('/data/getHomeList.json')
    .then((res)=>{
        // console.log(res.data.data);
         const data=res.data.data;
         const action={
             type:'init_home_data',
             data
         }
         this.props.changeHomeData(action);
    })
   
}
}
const mapDispatch=(dispatch)=>({
   changeHomeData(action){
       dispatch(action)
   }
})
export default connect(null,mapDispatch)(Home);