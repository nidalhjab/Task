import { Box, IconButton } from "@mui/material"
import { useContext, useEffect, useState } from "react"
import { Context } from "../../context/Context";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import { useStyles } from "./PaginationStyle";

export const Pagination = () => {
    const classes = useStyles();
    const { page, setPage } = useContext(Context);
    const [status, setStatus] = useState(page === 1 ? true : false);
    const prevPage = () => {
        return page === 1 ? null : setPage(page - 1)
    }
    const nextPage = () => {
        setPage(page + 1)
    }
    useEffect(() => {
        page > 1 ? setStatus(false) : setStatus(true)
    }, [page])
    return (
        <Box className={classes.pagination}>
            <IconButton disabled={status} onClick={prevPage}><ArrowBackIosIcon /></IconButton>
            <IconButton onClick={nextPage}><ArrowForwardIosIcon /></IconButton>
        </Box>
    )
}