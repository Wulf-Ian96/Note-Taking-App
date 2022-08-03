import React from "react";
import {
  Drawer,
  Typography,
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
import { useNavigate } from "react-router-dom";

export default function LgNav({ categoryData }) {
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
  const history = useNavigate();
  return (
    <Drawer
      variant="permanent"
      anchor="left"
      sx={{
        marginRight: "-60px",
        height: "100vh",
        width: "200px",
        marginBottom: "0px",
        padding: "0",

        // paper style
        "& .MuiDrawer-paper": {
          width: "150px",
          height: "100vh",
        },
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
      <Typography
        sx={{
          textAlign: "left",
          padding: "10px",
          borderBottom: "2px solid black",
          borderTop: "2px solid black",
        }}
      >
        Categories
      </Typography>
      <List>
        {categoryData.map((category) => (
          <ListItem key={category} button>
            <ListItemText primary={category} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}
