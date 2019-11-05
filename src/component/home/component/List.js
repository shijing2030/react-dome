import React,{Component} from 'react';
import {ListWrap,ListItem} from './../homeStyle';
import {connect} from 'react-redux';
import {NavLink}from "react-router-dom";
class List extends Component{
    
    render(){
        return(
            <ListWrap>
                {this.props.listList.map((item,index)=>{
                    return (
                        <NavLink to={'/single/'+(index+1)} key={index}>
                           <ListItem >
                           <img src={item.ListUrl} alt=""/>
                           <div>
                                <h3>{item.txt}</h3>
                                <p>{item.desc}</p>
                           </div>
                        </ListItem>
                        </NavLink>
                        
                    )
                })}
                
            </ListWrap>
        )
    }

}
const mapState=(state)=>({
    listList:state.home.listList

})
export default connect(mapState,null)(List);