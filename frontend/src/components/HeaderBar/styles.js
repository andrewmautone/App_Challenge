import styled from 'styled-components';

 const Styles = styled.div`
  width:100%;

    height:120px;
    background-color:#0b1116;
    justify-content:space-between;
       box-shadow: 0px 0px 15px -2px rgba(0,0,0,0.37);
    -webkit-box-shadow: 0px 0px 15px -2px rgba(0,0,0,0.37);
    -moz-box-shadow: 0px 0px 15px -2px rgba(0,0,0,0.37);
    z-index:10;
    align-items:center;
    display:flex;
  .topBarBackground{


    .profileName{

      color:#fff;
      font-family:'Montserrat';
      font-size:25px;

    }
    .profilePic{
       
        align-items:center;
        justify-content:center;
        display:flex;
        margin-right:25px;
      
    }
    .exitLabel{
      font-family:'Montserrat';
        color:#fff;
    }
    .exitLabel:hover{
      font-family:'Montserrat';
        color:#fff;
        opacity:0.75;
        cursor: pointer;
    }
    .exitAndIcons{

      display:flex;
      align-items:center;
      justify-content:space-between;
    }
    .logo{
      margin-left:25px;
      height:60%;
    cursor: pointer;
      
    }
    .profileTopInfos{
      min-width:150px;
      .iconsContainer{
        img{
          cursor: pointer;
        }

        img:not(:first-child){
          margin-left:5px;
        }
        margin-top:10px;
      }
      margin-left:20px;
        img{
          width:20px;
        }
        div{


        }

    }
  }
  
`;
export default Styles