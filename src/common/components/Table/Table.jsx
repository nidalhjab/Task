import {
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
} from "@mui/material";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../../context/Context";
import { Pagination } from "../Pagination/Pagination";
import { useStyles } from "./TableStyle";

const columns = [
  { id: "userInfo", align: "left", label: "User", minWidth: 325 },
  { id: "contcatInfo", align: "left", label: "Contact Information", minWidth: 100 },
  { id: "regInfo", label: "Registration Date", minWidth: 120, align: "left" },
  { id: "natInfo", label: "Country/Post Code", minWidth: 150, align: "left" }
];

export const UsersTable = () => {
  const { selectedUsers } = useContext(Context);
  const classes = useStyles();
  return (
    <Paper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {selectedUsers?.map((row, index) => {
              return (
                <TableRow
                  key={index}
                  component={Link}
                  to={"/users/" + row.userInfo.id}
                  state={row}
                  hover
                  role="checkbox"
                  tabIndex={-1}
                >
                  {columns.map((column, index) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={index} align={column.align}>
                        {column.id === "userInfo" ? (
                          <Box className={classes.userInfo}>
                            <Box>
                              <img
                                className={classes.img}
                                src={value.img}
                                alt="thumb-profile"
                              />
                            </Box>
                            <Box className={classes.userName}>
                              <Typography component="p" variant="bold">
                                {value.fullName}
                              </Typography>
                              <Typography variant="semiBold">
                                {value.address + " " + value.street}
                              </Typography>
                            </Box>
                          </Box>
                        ) : column.id === "contcatInfo" ? (
                          <Box>
                            <Typography component="p" variant="bold">
                              {value.email}
                            </Typography>
                            <Typography variant="semiBold">
                              {value.phone}
                            </Typography>
                          </Box>
                        ) : column.id === "regInfo" ? (
                          <Box>
                            <Typography component="p" variant="bold">
                              {value.fullDate}
                            </Typography>
                            <Typography variant="semiBold">
                              {value.fullTime}
                            </Typography>
                          </Box>
                        ) : (
                          <Box>
                            <Typography component="p" variant="bold">
                              {value.country}
                            </Typography>
                            <Typography variant="semiBold">
                              {value.postCode}
                            </Typography>
                          </Box>
                        )}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
        <Pagination />
      </TableContainer>
    </Paper>
  );
};
