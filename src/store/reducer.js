import {combineReducers} from 'redux'
import headReducer from '../component/head/store/headReducer';
import homeReducer from '../component/home/store/homeReducer';
import footReducer from '../component/foot/store/footReducer';
import singleReducer from '../component/single/store/singleReducer';
import loginReducer from '../component/login/store/loginReducer'

export default combineReducers({
    head:headReducer,
    home:homeReducer,
    foot:footReducer,
    single:singleReducer,
    login:loginReducer
})