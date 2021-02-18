import styled from 'styled-components';

const style = styled.div`
  
  width:100%;
  display:flex;

  align-items:center;
  flex-direction:column;

 
  .contentPlace{
    padding-top:25px;
    align-items:center;
    flex:1;
    display:flex;
    flex-direction:column;
    background-color:#0b1116;
    width:80%;
    align-self:center;
 
    .connectionsContainer{
    align-items:center;
    display:flex;
    max-width:90%;
    justify-content:center;
    flex-direction:row;
    flex-wrap:wrap;
    
   
}

    div{

      display:flex;
      flex-direction:column;
      align-items:center;
      .profileName{
      
      font-size:25px;
      margin-top:10px;
      font-family:"Montserrat";
      color:#fff

    }
     
   
    }
    .textAreaBioEdit{

      resize: none;
      margin-bottom:10px;

    }
   
    .divisionText{
        
        font-size:25px;
        margin-top:10px;
        font-family:"Montserrat";
        color:#fff;
        margin-bottom:1em;
  
      }
    .profileBioContainer{

      display:flex;
      flex-direction:row;
      padding:5px;
      align-items:center;
      justify-content:center;

      p{
        font-size:15px;
       
        max-height:20px;
        overflow: hidden;
        text-overflow: ellipsis;
        flex:1;
        margin-right:0px;
        display:flex;
        color:#aaa

      }
      svg{
        
        margin-top:5px;
        margin-left:8px;
      }
      svg:hover{

       opacity:0.5;
       cursor:pointer;
       
      }

    }


 
  }

  .topBarBackground{
    width:100%;
    height:120px;
    background-color:#0b1116;
    justify-content:space-between;
       box-shadow: 0px 0px 38px -2px rgba(0,0,0,0.37);
    -webkit-box-shadow: 0px 0px 38px -2px rgba(0,0,0,0.37);
    -moz-box-shadow: 0px 0px 38px -2px rgba(0,0,0,0.37);
    z-index:10;
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
export default style;
