import React, { useState } from "react";

import { Typography, Container, Paper, TextField, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { addDoc, collection } from "firebase/firestore";

export default function Create({ database }) {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");

  // function to submit form to the database

  const handleSubmit = async () => {
    const payload = {
      title: title,
      details: details,
      category: "Personal",
    };
    await addDoc(collection(database, "Notes"), payload);
  };

  return (
    <Container
      sx={{
        marginTop: "80px",
        marginRight: "40px",
        display: "flex",
        alignItems: "center",
      }}
    >
      <Paper
        sx={{
          backgroundColor: "rgba(51, 51, 51, 0.077)",
          border: "1px solid #587b7f",
          padding: "10px",
        }}
      >
        <Typography sx={{ marginBottom: "5px" }} color="#333" variant="h4">
          Create new note
        </Typography>
        <TextField
          sx={{ marginBottom: "15px" }}
          type="text"
          required
          label="Title"
          fullWidth
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          value={title}
        />
        <TextField
          color="primary"
          type="text"
          required
          label="Details"
          fullWidth
          multiline
          rows={4}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
          value={details}
        />
        <Button
          sx={{ marginTop: "10px" }}
          onClick={handleSubmit}
          endIcon={<ArrowForwardIcon />}
        >
          {" "}
          Submit
        </Button>
      </Paper>
    </Container>
  );
}
