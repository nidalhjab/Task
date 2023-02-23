import { List, ListItem, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useStyles } from "./SideBarOptionStyle";
import {PropTypes} from 'prop-types';

export const SideBarOption = ({ title, icon }) => {
    const classes = useStyles();
    return (

        <List className={classes.title}>
            <ListItem disablePadding>
                <ListItemButton  >
                    <ListItemIcon>
                        <img src={icon} alt="icon" />
                    </ListItemIcon>
                    <ListItemText primary={title} />
                </ListItemButton>
            </ListItem>
        </List>

    )
}
SideBarOption.propTypes = {
    title: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired
}
