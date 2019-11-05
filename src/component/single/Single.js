import React,{Component} from 'react';
import Head from '../head/Head';
import Foot from '../foot/Foot';
import {connect} from 'react-redux';
import axios from 'axios';
import {SingleWrap} from './singleStyle';
class Single extends Component{
    render(){
        return (
            <div className="single" >
                <Head></Head>
                <SingleWrap>
                   <h2>{this.props.singleList.title}</h2>
                   <p>{this.props.singleList.body}</p>
                </SingleWrap>
                  
                <Foot/>
            </div>
        )
        
    }
    componentDidMount(){
    const id=this.props.match.params.id;
        console.log(id);
         axios.get('http://jsonplaceholder.typicode.com/posts/'+id)
         .then((res)=>{
             console.log(res.data);
             const singleData=res.data
             const action={
                 type:'init_single_data',
                 singleData
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
const mapState=(state)=>({
   singleList:state.single.singleList
})
export default connect(mapState,mapDispatch)(Single);