import {
  AppBar,
  Toolbar,
  Avatar,
  Typography,
  IconButton,
  List,
  ListItem,
  Box,
} from "@mui/material";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";

// -------------------------- End of Imports ----------------

export default function SmNav({ categoryData }) {
  // menu logic
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  // end of menu logic

  const history = useNavigate();

  return (
    <AppBar>
      <Toolbar
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{ display: "flex", flexDirection: "row", alignItems: "center" }}
        >
          <IconButton
            sx={{ marginRight: "-10px", marginLeft: "-15px" }}
            id="basic-button"
            aria-controls={open ? "basic-menu" : undefined}
            aria-haspopup="true"
            aria-expanded={open ? "true" : undefined}
            onClick={handleClick}
          >
            {" "}
            <MenuIcon
              fontSize="large"
              color="secondary"
              sx={{ padding: "3px" }}
            />
          </IconButton>
          <Typography
            fontSize="1rem"
            sx={{
              display: "block",
              marginLeft: "10px",
              color: "white",
              justifySelf: "left",
            }}
          >
            My Notes
          </Typography>
        </Box>

        <Menu
          sx={{
            zIndex: 2000,
          }}
          id="basic-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "basic-button",
          }}
        >
          <MenuItem
            onClick={() => {
              history("/Note-Taking-App/");
              handleClose();
            }}
          >
            All Notes
          </MenuItem>
          <MenuItem
            sx={{
              borderBottom: "2px solid #325a87",
              borderTop: "2px solid #325a87",
            }}
          >
            Categories
          </MenuItem>
          {categoryData.map((category) => (
            <Link to={`/Note-Taking-App/:${category}`}>
              {" "}
              <MenuItem onClick={() => history(category.path)}>
                {category}
              </MenuItem>
            </Link>
          ))}
        </Menu>

        <IconButton onClick={() => history("/Create")}>
          <AddCircleOutlineIcon fontSize="large" color="secondary" />{" "}
        </IconButton>
      </Toolbar>
    </AppBar>
  );
}
