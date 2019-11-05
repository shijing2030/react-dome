const defaultState={
    singleList:[]
}
export default(state=defaultState,action)=>{
    const newState=JSON.parse(JSON.stringify(state))
   if(action.type==='init_single_data'){
        newState.singleList=action.singleData
        return newState
    }
    return state
}