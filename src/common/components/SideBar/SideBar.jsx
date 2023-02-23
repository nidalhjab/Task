import { Box, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { useGetMenuItems } from "../../hooks/useGetMenuItems";
import { SideBarOption } from "../SideBarOption/SideBarOption";
import { useStyles } from "./SideBarStyle";
import {Spinner} from "../Spinner/Spinner";

export const SideBar = () => {
    const classes = useStyles();
    const { items, error, loading } = useGetMenuItems();
    let content;
    if (!error && !loading) {
        content = items?.tabs.map(({ icon, title }) => {
            return (
                <Link className={classes.link} key={title} to={`${title.toLowerCase()}`}>
                    <SideBarOption icon={icon} title={title} />
                </Link>
            );
        });
    }
    if(loading){
        content = <Spinner/>
    }
    if (error) {
        content = <h2>Something went wrong! {error}</h2>;
    }

    return (
        <Box className={classes.root}>
            
                <Typography align="center">
                    <img src="icons/logo.svg" alt="profile" />
                </Typography>
                {content}
        </Box>
    )
}