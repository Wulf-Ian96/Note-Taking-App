import React, { useEffect, useState } from "react";
import NoteCard from "../components/NoteCard";
import { Grid, Container } from "@mui/material";
import { useParams } from "react-router-dom";
import { collection, onSnapshot, query, where } from "firebase/firestore";

export default function NotesCategory({ database }) {
  const [categoryData, setCategoryData] = useState([
    { notesData: "", id: "id" },
  ]);
  const { category } = useParams();

  const q = query(
    collection(database, "Notes"),
    where("category", "==", `${category.substring(1)}`)
  );

  useEffect(() => {
    onSnapshot(q, (snapshot) => {
      setCategoryData(
        snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
      );
    });
  }, [category]);

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
        {categoryData.map((note) => (
          <Grid item key={note.id} xs={12} sm={12} md={6} lg={6} xl={6}>
            <NoteCard database={database} note={note} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
