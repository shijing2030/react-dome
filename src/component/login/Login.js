import React, { Component } from 'react';
import { Button} from 'antd';
import {LoginWrap,LoginBox} from './loginStyle';
import {connect} from 'react-redux';
import renderEmpty from 'antd/lib/config-provider/renderEmpty';

class Login extends Component{
    render(){
        return (
            <div>
                <LoginWrap>
                    <LoginBox>
                        <h1>请您登录</h1>
                        <form>
                            <input type="text" placeholder="请输入账号" value={this.props.user} onChange={this.props.userChange}/><br/>
                            <input type="password" placeholder="请输入密码" value={this.props.pass} onChange={this.props.passChange} /><br/>
                            <Button type="primary" shape="round" onClick={this.props.btnClick}>登录</Button>
                            <Button type="primary" shape="round" onClick={this.props.resetClick}>重置</Button>
                        </form>
                    </LoginBox>
                </LoginWrap>
            </div>
         )
    }
    
}
const mapState=(state)=>({
    user:state.login.user,
    pass:state.login.pass
})
const mapDispatch=(dispatch)=>({
   btnClick (){
       const action={
           type:'btn_click'
       }
       dispatch(action)
   },
   resetClick(){
      const action={
          type:'reset_click'
      }
      dispatch(action)
   },
   userChange (e){
       const user=e.target.value
       const action={
           type:'user_change',
           user
       }
       dispatch(action)
   },
   passChange (e){
    const pass=e.target.value
    const action={
        type:'pass_change',
        pass
    }
    dispatch(action)
}
})
export default connect(mapState,mapDispatch)(Login);