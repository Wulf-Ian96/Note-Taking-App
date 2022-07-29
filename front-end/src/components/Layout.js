import React from "react";
import { Drawer, Typography, Box } from "@mui/material";
import { styled } from "@mui/material";
import { style } from "@mui/system";
const LayoutDiv = styled("div")({
  backgroundColor: "#f9f9f9",
  display: "flex",
  width: "100%",
});
export default function Layout({ children }) {
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
        <Box>
          <Typography>Users Notes</Typography>
        </Box>
      </Drawer>
      {children}
    </LayoutDiv>
  );
}
