import React from "react";
import { Outlet } from "react-router-dom";
const Dashboard = () => {
    return (
        <>
            <h1>This is dashboard page</h1>
            <Outlet />
        </>
    )
}
export default Dashboard