import React,{Component} from 'react';
import {HeadWrap,Logo,Nav,SearchWrap,Search,SearchInfo} from './headStyle';
import {connect} from 'react-redux'
import {NavLink}from "react-router-dom";
import Home from '../home/Home';
import Detail from '../details/Detail';

function showInfo(flag){
    if(flag){
        return (
            <SearchInfo>
                 <span>精品锅具</span>
                 <span>厨房用品</span>
                 <span>酒杯茶具</span>
             </SearchInfo>
  )
    }else{
        return null
    }
     
}
class Head extends Component{
    render(){
        return (
            <div className="head">
            <HeadWrap>
                <Logo/>
                <Nav>
                   
                        <NavLink to="/home">首页</NavLink>
                        <NavLink to="/detail">详情页</NavLink>
                        
                   
                </Nav>
                {showInfo(this.props.flag)}
                <SearchWrap className={this.props.flag?'flag':''}>
                    <Search className={this.props.flag?'flag':''} 
                    onFocus={this.props.inputFocus} onBlur={this.props.inputBlur}/>
                    <span className="glyphicon glyphicon-search"></span>
                    <NavLink to="/login">登录</NavLink>
                </SearchWrap>

            </HeadWrap>
            </div>
          );
    }
}

const mapState=(state)=>({
        flag:state.head.flag
    
})
const mapDispatch=(dispatch)=>({
   inputFocus(){
       const action={
           type:'input_focus',
       }
       dispatch(action)
   },
   inputBlur(){
    const action={
        type:'input_blur',
    }
    dispatch(action)
},
})
export default connect(mapState,mapDispatch)(Head);
