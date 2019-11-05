import React,{Component} from 'react';
import {ScanWrap,ScanItem} from './../homeStyle';
import {connect} from 'react-redux'
class Scan extends Component{
   
    render(){
        return(
            <ScanWrap>
                <img src="//asset.ibanquan.com/s/30611/727/footerImgShow_2?v=1568268246_1572510848" alt=""/>
                <img src="//asset.ibanquan.com/s/30611/727/footerImgShow_2?v=1568268246_1572510848" alt=""/>
                {this.props.scanList.map((item,index)=>{
                    return (
                        <ScanItem key={index}>{item.txt}</ScanItem>
                    )
                })}
            </ScanWrap>
        )
    }

}
const mapState=(state)=>({
    scanList:state.home.scanList
})
export default connect(mapState,null)(Scan);