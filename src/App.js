import { Box } from "@mui/material";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { SideBar } from "./common/components/SideBar/SideBar";
import { UserDetails } from "./common/components/UserDetails/UserDetails";

import { Home } from "./views/Home";
import { UsersView } from "./views/UsersView";
function App() {
  return (
    <BrowserRouter>
      <Box sx={{display:'flex',height:'100%'}} >
        <SideBar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="users" element={<UsersView />}>
            <Route path=":id" element={<UserDetails/>} />
          </Route>
        </Routes>
      </Box>
      <Box></Box>
    </BrowserRouter>
  );
}

export default App;
