import { Box } from "@mui/material"
import { makeStyles } from "@mui/styles";
import { Outlet } from "react-router-dom"
import { Header } from "../common/components/Header/Header";
import { Users } from "../common/components/Users/Users";

const useStyles = makeStyles({
  main: {
    width: "80%",
    padding: "3%",
    backgroundColor:"#F7F8FC",
    marginLeft: "20%",
  }

});
export const UsersView = () => {
  const classes = useStyles();
  return (

    <Box className={classes.main}  >
      <Header />
      <Users />
      <Outlet/>
    </Box>
  )
}
