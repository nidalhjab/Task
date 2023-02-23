import { Box, Typography } from "@mui/material";
import { useLocation } from "react-router-dom";
import { useStyles } from "./HeaderStyle";

export const Header = () => {
  const classes = useStyles();
  const { pathname } = useLocation();
  const title = pathname.slice(1, pathname.length);
  const capitalized =
    title.charAt(0).toUpperCase()
    + title.slice(1)

  return (
    <Box className={classes.header} >
      <Typography width="20%" variant="h6">
        {capitalized}
      </Typography>
      <Box className={classes.userInfo}>
        <Typography className={classes.userName} >Jones Ferdinand</Typography>
        <img className="" src="icons/profile.svg" alt="profile" />
      </Box>
    </Box>
  );
};
