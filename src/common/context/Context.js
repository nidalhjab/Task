import { createContext } from "react";

export const Context = createContext({
    page: 1,
    setPage: () => { },
    selectedUsers: [],
    setSelectedUsers: () => { },
    filteredUsers: [],
    setFilteredUsers: () => { }
});