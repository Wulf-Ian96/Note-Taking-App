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
        // // sx={{
        // //   "&.MuiGrid-root": {
        // //     maxWidth: "100%",
        // //     justifyContent: "center",
        // //   },
        // }}
        container
        spacing={2}
      >
        {notesData.map((note) => (
          <Grid item key={note.id} xs={12} sm={5} md={5} lg={3}>
            <NoteCard database={database} note={note} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
