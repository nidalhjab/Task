import { Box } from "@mui/material";
import TextField from "@mui/material/TextField";
import { useStyles } from "./TextInputStyle";
import {PropTypes} from 'prop-types';

export const TextInput = ({ title, OnChange }) => {
    const classes = useStyles();
    return (
        <Box className={classes.input} >
            <TextField onChange={(e) => OnChange(e, title)} size="small" label={title} />
        </Box>
    )
}

TextInput.propTypes = {
    title: PropTypes.string,
    OnChange: PropTypes.func
}