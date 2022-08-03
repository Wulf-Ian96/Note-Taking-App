import React, { useState, useEffect } from "react";
import LgNav from "./LargeScreenNav";
import SmNav from "./SmallScreenNav";
import { styled } from "@mui/material";

const LayoutDiv = styled("div")({
  backgroundColor: "#f9f9f9",
  display: "flex",
  width: "100%",
  height: "100vh",
});

export default function Layout({ children, categoryData }) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleWindowResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  console.log(windowWidth);
  const breakPoint = 500;

  // conditional components rendered

  return (
    <LayoutDiv>
      {/* side Drawer */}
      {windowWidth > breakPoint ? (
        <LgNav categoryData={categoryData} />
      ) : (
        <SmNav categoryData={categoryData} />
      )}
      {children}
    </LayoutDiv>
  );
}
