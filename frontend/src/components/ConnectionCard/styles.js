import styled from 'styled-components';

const Styles = styled.div`

img{
 width:2.5em;
 margin-bottom:10px;
    
}
p{
    color:#fff;
    font-family:'Montserrat';
    font-weight:bold;
}
.assignButton:hover{
opacity:0.65;
cursor:pointer;
    
}
.assignButton{
width:100%;
height:4em;
border-radius:  0px 0px 10px 10px;
background-color:#091c11;
align-items:center;
justify-content:center;
p{
    margin:0;

}
}
box-shadow: 0px 0px 10px -2px rgba(0,0,0,0.37);
-webkit-box-shadow: 0px 0px 10px -2px rgba(0,0,0,0.37);
-moz-box-shadow: 0px 0px 10px -2px rgba(0,0,0,0.37);
width:15em;
max-width:80%;
margin:10px;
height:10em;
background-color:#06090B;
border-radius:10px;
display:flex;
justify-content:space-between;
  
`;
export default Styles