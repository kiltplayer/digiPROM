import React from "react";

import {Home, AppRegistration, Assessment, Dashboard , Group  ,PermMedia} from "@mui/icons-material";

export const SidebarData = [
    {
        title : "Dashboard",
        icon : <Dashboard />,
        link : "/Dashboard"
    },
    {
        title : "Register Patient",
        icon : <AppRegistration />,
        link : "/Registration"
    },    {
        title : "Assessment",
        icon :  <Assessment />,
        link : "/Assessment"
    },    {
        title : "Dashboard",
        icon : <Dashboard />,
        link : "/Dashboard1"
    },    {
        title : "Group",
        icon : <Group />,
        link : "/Group"
    },    {
        title : "PermMedia",
        icon : <PermMedia />,
        link : "/PermMedia"
    },
]