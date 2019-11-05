import React,{Component} from 'react';
import {FootWrap,Logo,LeftWrap,MidWrap,RightWrap} from './footStyle';
import {connect} from 'react-redux';
class Foot extends Component{
    render(){
        return (
            <div className="foot">
                <FootWrap>
                    <LeftWrap>
                    <Logo/><br/>
                    <p>青竹良品原创生活类电商品牌，秉承一贯的严谨态度，我们深入世界各地，从源头全程严格把控商品生产环节，
                        力求帮消费者甄选到最优质的商品，全线采用天然原材料，控制甲醛低量无害，
                        采用进口工艺，国际生产线不断优化，食材保证核心原产地新鲜直供，让你享受品质生活</p>
                    </LeftWrap>
                    <MidWrap>
                        <img src="//asset.ibanquan.com/s/30611/727/footerImgShow_2?v=1568268246_1572510848" alt=""/>
                        <img src="//asset.ibanquan.com/s/30611/727/footerImgShow_2?v=1568268246_1572510848" alt=""/>
                    </MidWrap>
                    <RightWrap>
                        <ul>
                         {this.props.list.map((item,index)=>{
                             return(
                              <li key={index}>
                                <span>{item.txt1}</span>
                                <span>{item.txt2}</span>
                                <span>{item.txt3}</span>                               
                              </li>
                             )
                            
                         })}
                        </ul>
                    </RightWrap>
                </FootWrap>
            </div>
        )
    }
}
const mapState=(state)=>({
   list:state.foot.list
})
export default connect(mapState,null)(Foot);