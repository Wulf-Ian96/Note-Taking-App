import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
  Drawer,
  Typography,
  Box,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  AppBar,
  Toolbar,
  Avatar,
} from "@mui/material";

import SubjectIcon from "@mui/icons-material/Subject";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { styled } from "@mui/material";

const LayoutDiv = styled("div")({
  backgroundColor: "#f9f9f9",
  display: "flex",
  width: "100%",
  marginLeft: "8px",
  marginBottom: "-8px",
  height: "99vh",
});

const menuItems = [
  {
    text: "My Notes",
    icon: <SubjectIcon color="primary" />,
    path: "/",
  },
  {
    text: "Create Note",
    icon: <AddCircleIcon color="error" />,
    path: "/Create",
  },
];
const activeTab = {
  backgroundColor: "#333",
};
export default function Layout({ children }) {
  const history = useNavigate();

  return (
    <LayoutDiv>
      {/* side Drawer */}
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: "250px",
          "& .MuiDrawer-paper": { width: "200px", display: "block" },
        }}
      >
        <AppBar>
          <Toolbar
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Typography>Note Taking App</Typography>
            <Avatar></Avatar>
          </Toolbar>
        </AppBar>
        <Typography></Typography>

        <List sx={{ marginTop: "60px" }}>
          {menuItems.map((item) => (
            <ListItem key={item.text} button onClick={() => history(item.path)}>
              {/* you can point to a path, by using useHistory.push() */}
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      {children}
    </LayoutDiv>
  );
}
