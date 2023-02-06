import {
  Group,
  Home,
  ModeNight,
  Pages,
  Person,
  Settings,
  Store,
} from "@mui/icons-material";
import {
  Box,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Switch,
} from "@mui/material";
import React from "react";
import NavListItem from "./NavListItem";

function Sidebar() {
  return (
    <Box sx={{ flex: 1 }}>
      <Box position={{ md: "fixed" }}>
        <List>
          <NavListItem text="Home" icon={<Home />} />
          <NavListItem text="Pages" icon={<Pages />} />
          <NavListItem text="Groups" icon={<Group />} />
          <NavListItem text="Marketplace" icon={<Store />} />
          <NavListItem text="Settings" icon={<Settings />} />
          <NavListItem text="Profile" icon={<Person />} />
          <ListItem disablePadding>
            <ListItemButton component="a">
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    </Box>
  );
}

export default Sidebar;
