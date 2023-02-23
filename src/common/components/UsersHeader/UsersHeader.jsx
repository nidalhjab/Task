import { Typography, Box } from "@mui/material";
import { useContext } from "react";
import { Context } from "../../context/Context";
import { TextInput } from "../TextInput/TextInput";
import { useStyles } from "./UsersHeaderStyle";

export const UsersHeader = () => {
  const { selectedUsers, setSelectedUsers, filteredUsers } = useContext(Context);
  const classes = useStyles();
  const changeHandler = (e, title) => {
    let value = e.target.value;
    if (value.length > 0) {
      let searchedUsers;
      if (title === "Gender") {
        searchedUsers = selectedUsers.filter((user) =>
          user.userInfo.gender.includes(value.toLowerCase())
        );
      } else {
        searchedUsers = selectedUsers.filter((user) =>
          user.natInfo.nat.toLowerCase().includes(value.toLowerCase())
        );
      }
      setSelectedUsers(searchedUsers);
    } else {
      setSelectedUsers(filteredUsers);
    }
  };
  return (
    <Box className={classes.container}>
      <Box>
        <Typography variant="body1">All Users</Typography>
      </Box>
      <Box className={classes.filters}>
        <TextInput OnChange={changeHandler} title="Gender" />
        <TextInput OnChange={changeHandler} title="Nationality" />
      </Box>

    </Box>
  );
};
