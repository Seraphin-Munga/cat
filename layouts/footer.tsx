import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import styles from "./footer.module.scss"


export default function Footer() {
  return (
    <AppBar className={styles.footer} position="static" color="primary">
      <Toolbar>
      </Toolbar>
    </AppBar>
  );
}
