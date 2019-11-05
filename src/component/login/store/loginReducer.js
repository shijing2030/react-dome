const defaultState={
    user:'',
    pass:''
}
export default (state=defaultState,action)=>{
    const newState=JSON.parse(JSON.stringify(state));
    if(action.type==='btn_click'){
        if(state.user!=='sj')(
            alert('用户名错误！')
        )
        else if(state.pass!=='123'){
            alert('密码错误！')
        }
        else{
            window.location.href="/"
        }
        return newState
    }
    else if(action.type==='user_change'){ 
        newState.user=action.user
        return newState
    }
    else if (action.type==='pass_change'){
        newState.pass=action.pass
        return newState
    }else if(action.type==='reset_click'){
        newState.user='';
        newState.pass='';
        return newState;
    }
   return state
}