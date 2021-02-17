import styled from 'styled-components';

const Styles = styled.div`
  
  img{
    margin-bottom:25px;
    max-width:80%;
  }
 display:flex;
 flex-direction:column;
 flex:1;
 width:100%;
 height:100%;
 align-items:center;
 justify-content:center;
 .buttonContainer{
    
    padding: 10px 0px 10px 0px;
    display:flex;
    width:100%;
    height:100%;
    flex-direction:column;
    justify-content:space-around;
    align-items:center;
    .inputContainer{
        width:100%;
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        height:50%;
       align-items:center;
        
        input{
          margin-top:10px

        }

    }
    .errMessage{
      color:#f44;   
      font-size:10px;
    }
    .buttonSignup{
        font-size:13px;

    }
    .buttonSignup:hover{
        cursor:pointer;
        opacity:0.8;

    }
 }
  
`;
export default Styles