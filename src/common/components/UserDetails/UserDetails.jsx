import { useLocation } from "react-router-dom";
import {Typography,Box} from "@mui/material";
import { useStyles } from "./UserDetailsStyle";

export const UserDetails = () => {
    const { state } = useLocation();
    const classes = useStyles();
    const { fullName, address, street, img } = state.userInfo;
    return <Box className={classes.cardContainer}>
                <Box className={classes.cardHead}>
                <Box className={classes.cardImg}>
                    <img className={classes.img} src={img} alt = "profile"/>
                </Box>
                </Box>
                <Typography className={classes.cardName} variant="bold" component="p">
                    {fullName}
                </Typography>
                <Typography variant="semiBold" className={classes.cardAddress} >
                    {`${address} ${street}`}
                </Typography>
               
    </Box>
};
