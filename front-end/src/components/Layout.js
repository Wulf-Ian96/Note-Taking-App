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
} from "@mui/material";

import SubjectIcon from "@mui/icons-material/Subject";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { styled } from "@mui/material";

const LayoutDiv = styled("div")({
  backgroundColor: "#f9f9f9",
  display: "flex",
  width: "100%",
  marginLeft: "20px",
});

const menuItems = [
  {
    text: "My Notes",
    icon: <SubjectIcon color="secondary" />,
    path: "/",
  },
  {
    text: "Create Note",
    icon: <AddCircleIcon color="secondary" />,
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
      <AppBar
        sx={{
          "&.MuiAppBar-root": {
            width: "calc(100% - 200px)",
            zIndex: 2000,
          },
        }}
      >
        <Toolbar sx={{ width: "calc(100% -250px" }}>
          <Typography>Note Taking App </Typography>
        </Toolbar>
      </AppBar>
      {/* side Drawer */}
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          width: "250px",
          "& .MuiDrawer-paper": { width: "200px", display: "block" },
        }}
      >
        <Typography>Users Notes</Typography>

        <List>
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
