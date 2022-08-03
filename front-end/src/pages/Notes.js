import React from "react";
import NoteCard from "../components/NoteCard";
import { Grid, Paper, Typography, Container } from "@mui/material";

export default function Notes({ notesData, database }) {
  return (
    <Container
      sx={{
        "&.MuiContainer-root": {
          maxWidth: "100%",
        },

        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",

        marginTop: "80px",
      }}
    >
      <Grid
        sx={{
          "&.MuiGrid-root": {
            Width: "100%",
            justifyContent: "center",
          },
        }}
        container
        spacing={2}
      >
        {notesData.map((note) => (
          <Grid item key={note.id} xs={12} sm={12} md={6} lg={6} xl={6}>
            <NoteCard database={database} note={note} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}

// breakpoints: {
//   values: {
//     xs: 0,
//     sm: 460,
//     md: 600,
//     lg: 900,
//     xl: 1200,
//   },
