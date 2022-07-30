import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, onSnapshot } from "firebase/firestore";
import Notes from "./pages/Notes";
import Create from "./pages/Create";
import { createTheme, ThemeProvider, styled } from "@mui/material";
import Layout from "./components/Layout";

const CustomLayout = styled(Layout)({
  backgroundColor: "#f9f9f9",
});
export default function App() {
  // set the Firebase DB config

  const firebaseConfig = {
    apiKey: "AIzaSyDL8cWtNDTZgu4U3AvKWPsaf7GA99jSr34",
    authDomain: "note-taking-app-b2b68.firebaseapp.com",
    projectId: "note-taking-app-b2b68",
    storageBucket: "note-taking-app-b2b68.appspot.com",
    messagingSenderId: "679643764037",
    appId: "1:679643764037:web:131996f22f04683609da2c",
    measurementId: "G-7FBEFM21BT",
  };
  // initialize firebase
  initializeApp(firebaseConfig);

  // connect to DataBase
  const database = getFirestore();

  // create a reference/ point to the collection you want
  const collectionRef = collection(database, "Notes");

  const [notesData, setNotesData] = useState([{ noteData: "", id: "" }]);
  useEffect(() => {
    onSnapshot(collectionRef, (snapshot) => {
      setNotesData(snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    });
  }, []);
  console.log(notesData);

  // Create MUI color theme

  const NewTheme = createTheme({
    palette: {
      primary: {
        main: "#587b7f",
      },
      secondary: {
        main: "#8dab7f",
      },
      error: {
        main: "#EF7C8E",
      },
    },
    typography: {
      fontFamily: "Roboto Mono",
    },
  });
  return (
    <ThemeProvider theme={NewTheme}>
      <BrowserRouter>
        <CustomLayout>
          <Routes>
            <Route
              path="/"
              element={<Notes database={database} notesData={notesData} />}
            />

            <Route path="/Create" element={<Create database={database} />} />
          </Routes>
        </CustomLayout>
      </BrowserRouter>
    </ThemeProvider>
  );
}
