import { makeStyles } from "@mui/styles";

export const useStyles = makeStyles({
    cardContainer: {
      position:'absolute',
      top:0,
      right:0,
      width:"55%",
      zIndex:2,
      height:"100%",
      backgroundColor:"#FFFFFF",
      textAlign:"center"
    },
    cardHead:{
        position:"relative",
        backgroundColor:"#528CFC",
        height:"158px"
    },
    cardImg:{
        position: "absolute",
        bottom: 0,
        left: "50%",
        transform: "translate(-50%, 50%)"
    },
    img:{
        border:"1px",
        borderRadius:"50%"
    },
    cardName:{
        fontSize:["18px",'!important'],
        marginTop:["10%",'!important'],
    },
    cardAddress:{
        fontSize:["14px",'!important'],
        marginTop:["2%",'!important'],
    }
  });
