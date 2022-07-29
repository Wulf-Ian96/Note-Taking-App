import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  IconButton,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteDoc, doc } from "firebase/firestore";
export default function NoteCard({ note, database }) {
  const handleDelete = (id) => {
    // delete doc takes a document reference, which has 3 arguments (database, "CollectionName", id)
    const docRef = doc(database, "Notes", id);

    deleteDoc(docRef);
  };
  return (
    <Card elevation={3}>
      <CardHeader
        action={
          <IconButton
            onClick={() => {
              handleDelete(note.id);
            }}
            color="error"
          >
            <DeleteIcon />
          </IconButton>
        }
        titleTypographyProps={{ color: "primary" }}
        title={note.title}
        subheader={note.category}
      />
      {/* End of card Header */}

      <CardContent>
        <Typography variant="body2" color="textSecondary">
          {note.details}
        </Typography>
      </CardContent>
    </Card>
  );
}
