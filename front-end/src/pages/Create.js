import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Typography, Container, Paper, TextField, Button } from "@mui/material";
import { styled } from "@mui/material/styles";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { addDoc, collection } from "firebase/firestore";

export default function Create({ database }) {
  const [title, setTitle] = useState("");
  const [details, setDetails] = useState("");
  const [category, setCategory] = useState("");

  // function to submit form to the database
  const navigate = useNavigate("/");
  const handleSubmit = async (event) => {
    event.preventDefault();
    const payload = {
      title: title,
      details: details,
      category: category,
    };
    await addDoc(collection(database, "Notes"), payload);
    navigate("/Note-Taking-App/");
  };

  // paper style

  return (
    <Container
      sx={{
        marginTop: "-4rem",
        display: "flex",
        alignItems: "center",
        width: "100%",
        justifyContent: "center",
      }}
    >
      {/* breakpoints: {
      values: {
        xs: 100,
        sm: 300,
        md: 600,
        lg: 900,
        xl: 1200,
      }, */}
      <Paper
        sx={{
          backgroundColor: "#f4f4f4",
          border: "1px solid #495d73",
          padding: "10px",
          justifySelf: "center",
          height: "25rem",
          width: "100%",

          zIndex: { xs: 2000 },
        }}
      >
        <Typography
          sx={{
            marginBottom: "5px",
            fontSize: { sm: "1rem", md: "2rem" },
          }}
          color="#333"
        >
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
          sx={{ marginBottom: "15px" }}
          type="text"
          required
          label="Category"
          fullWidth
          onChange={(e) => {
            setCategory(e.target.value);
          }}
          value={category}
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
          variant="contained"
          sx={{
            marginTop: "10px",
            backgroundColor:
              "linear-gradient(315deg, hsla(212, 46%, 36%, 1) 0%, hsla(213, 35%, 88%, 1) 100%)",
          }}
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
