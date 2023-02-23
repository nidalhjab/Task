import { Box, Typography } from "@mui/material";
import { UsersHeader } from "../UsersHeader/UsersHeader";
import { useEffect, useState } from "react";
import { useGetUsers } from "../../hooks/useGetUsers";
import { formatUsers } from "../../../utlis/formatUsers";
import { Context } from "../../context/Context";
import { useStyles } from "./UsersStyle";
import { Spinner } from "../Spinner/Spinner";
import { UsersTable } from "../Table/Table";

export const Users = () => {
  let content;
  const [page, setPage] = useState(1);
  const classes = useStyles();
  const { users, loading, error } = useGetUsers(page);
  const [selectedUsers, setSelectedUsers] = useState([]);
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (users) {
      const usersList = formatUsers(users);
      setSelectedUsers(usersList);
      setFilteredUsers(usersList);
    }
  }, [users, error]);
  if (loading) {
    content = (
      <Spinner />
    );
  }
  if (error) {
    content = <Typography variant="h2">Something wrong!</Typography>;
  }
  if (!error && !loading) {
    content = (
      <Context.Provider
        value={{
          page,
          setPage,
          selectedUsers,
          setSelectedUsers,
          searchQuery,
          setSearchQuery,
          filteredUsers,
          setFilteredUsers,
        }}
      >
        <UsersHeader />
        <UsersTable />
      </Context.Provider>
    );
  }
  return <Box className={classes.usersContainer}>{content}</Box>;
};
