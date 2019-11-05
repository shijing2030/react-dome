import React,{Component} from 'react';
import {SineWrap,SineItem} from './../homeStyle';
import {connect} from 'react-redux'
class Sine extends Component{
    render(){
        return(
            <SineWrap>
              {this.props.sineList.map((item,index)=>{
                  return(
                      <SineItem key={index}>
                          <img src={item.SineUrl} alt=""/><br/>
                          <span>{item.txt}</span>
                      </SineItem>
                  )
              })}
            </SineWrap>
        )
    }

}
const mapState=(state)=>({
    sineList:state.home.sineList

})
export default connect(mapState,null)(Sine);