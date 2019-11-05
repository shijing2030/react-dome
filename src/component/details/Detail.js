import React from 'react';
import {DetailWrap} from './detailStyle';
import {connect} from 'react-redux';
import Head from '../head/Head';
import Foot from '../foot/Foot';
import { Carousel } from 'antd';
function Detail (){
    return (
        <div className="detail">
            <Head/>
            <DetailWrap>
                <h1>青竹良品原创生活类电商品牌</h1>
               
                <Carousel autoplay>
                    <div>
                   <img src="//asset.ibanquan.com/s/30611/727/index_global3_pic_1?v=1568268246_1572510848" alt=""/>
                    </div>
                    <div>
                    <img src="//asset.ibanquan.com/s/30611/727/index_global3_pic_2?v=1568268246_1572510848" alt=""/>
                    </div>
                    <div>
                   <img src="//asset.ibanquan.com/s/30611/727/index_global3_pic_3?v=1568268246_1572510848" alt=""/>
                    </div>
                    <div>
                    <img src="//asset.ibanquan.com/s/30611/727/index_slide_3?v=1568268246_1572510848" alt="" />
                    </div>
                </Carousel>
               <p>
               青竹良品原创生活类电商品牌，秉承一贯的严谨态度，我们深入世界各地，从源头全程严格把控商品生产环节，力求帮消费
               者甄选到最优质的商品，全线采用天然原材料，控制甲醛低量无害，采用进口工艺，国际生产线不断优化，食材保证核心原产地新鲜直供，让你享受品质生活
               </p>
            </DetailWrap>
            <Foot/>
        </div>
    )
}
export default connect(null,null)(Detail);