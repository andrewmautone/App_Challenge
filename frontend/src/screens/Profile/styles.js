import styled from 'styled-components';

const style = styled.div`
  
  width:100%;
  .topBarBackground{
    width:100%;
    height:120px;
    background-color:#0b1116;
    justify-content:space-between;

    align-items:center;
    display:flex;

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

      
    }
    .profileTopInfos{

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
export default style;
