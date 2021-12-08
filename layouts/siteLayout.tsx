import * as React from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Header from "./header";
import Footer from "./footer";
import { INode } from "../core/models/node";



const SiteLayout = ({ children }: INode, props: any) => {
  return (
    <div>
      <Header/>
      <CssBaseline />
      <Container style={{maxWidth: "1200px"}}>
        <Box  >
          {/* <img src={banner} width="1200px" height="540" alt="" /> */}
        </Box>
      </Container>
      <div className="container">
        {children}
        </div>
        <Footer/>
    </div>
  );
};

export default SiteLayout;
