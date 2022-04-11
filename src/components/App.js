import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

import UserListPage from "../pages/UserListPage";
import AddUserPage from "../pages/AddUserPage";

const App = () => {
 return(
    <BrowserRouter>
    <Routes>
        <Route path="/" element={<UserListPage />} />
        <Route path="/add-user" element={<AddUserPage />} />
    </Routes>
    </BrowserRouter>
 )
}

export default App