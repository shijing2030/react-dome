import styled from 'styled-components';
import logo from './../../static/logo.jpg'
export const FootWrap = styled.div`
width:100%;
height:250px;
background: #ccc;
padding:30px 292px;
`
export const Logo = styled.div`
width:100px;
height:60px;
background:url(${logo});
background-size: 100px 60px;
`
export const LeftWrap = styled.div`
width:340px;
height:190px;
float: left;
`
export const MidWrap = styled.div`
width:330px;
height:190px;
float: left;
padding-left:50px;
img{width:120px;
height:120px;
margin:40px 10px;}
`
export const RightWrap = styled.div`
width:320px;
height:190px;
float: left;
ul{
    width:300px;
    padding-left:70px;
    text-align:center;
    li{
        padding:8px;
        span{
            margin-right:20px;
            color:#000;
        }
    }
}
`