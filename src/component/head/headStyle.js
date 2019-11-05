import styled from 'styled-components';
import logo from './../../static/logo.jpg'
export const HeadWrap = styled.div`
width:100%;
height:60px;
background: #ccc;
`
export const Logo = styled.div`
width:100px;
height:60px;
background:url(${logo});
background-size: 100px 60px;
margin-left:50px;
float: left;
`
export const Nav = styled.div`
width:300px;
height:60px;
float: left;
margin-left:100px;
line-height:60px;
a {font-size:26px;
color:#666;
margin-left:50px;}
`
export const SearchWrap = styled.div`
height:60px;
width:300px;
float: right;
position: relative;
transition:1s;
span{
position:absolute;
top:22px;
right:170px;
}
&.flag{
    width:350px;
}
a {
    margin-left:20px;
    color:#666;
}
`
export const Search = styled.input.attrs({placeholder:'请输入内容'})`
height:30px;
width:150px;
border-radius:15px;
margin-top: 15px;
background:#fff;
padding-left:20px;
transition:1s;
outline:none;
background:rgb(245,245,245);
&.flag{
    width:200px;
}
`
export const SearchInfo = styled.div`
width:250px;
height:60px;
float: left;
line-height:60px;
font-size:14px;
margin-left:400px;
color:#444;
span{
    margin-left:20px;
}
`