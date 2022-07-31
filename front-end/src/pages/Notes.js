import React from "react";
import NoteCard from "../components/NoteCard";
import { Grid, Paper, Typography, Container } from "@mui/material";

export default function Notes({ notesData, database }) {
  return (
    <Container
      sx={{
        width: "100%",
        marginTop: "80px",
        marginRight: "30px",
        marginLeft: "-55px",
      }}
    >
      <Grid container spacing={2}>
        {notesData.map((note) => (
          <Grid item key={note.id} xs={12} sm={6} md={4} lg={3}>
            <NoteCard database={database} note={note} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
