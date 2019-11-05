const defaultState={
    topicList:[],
    listList:[],
    sineList:[],
    scanList:[],
}
export default(state=defaultState,action)=>{
    const newState=JSON.parse(JSON.stringify(state))
    if(action.type==='init_home_data'){
         newState.topicList=action.data.topicList
         newState.listList=action.data.listList
         newState.sineList=action.data.sineList
         newState.scanList=action.data.scanList
         return newState

    }
    return state
}