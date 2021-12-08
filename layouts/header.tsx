import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import styles from  "./header.module.scss";


const Header = () => {
  return (
    <div>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar className={styles.header} position="static">
          <Toolbar className="toolbar-header">
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              <ul className={styles.nav}>
                <li>
                  <Link href="/">
                    <a>Breed</a>
                  </Link>
                </li>
                <li>
                  <Link href="/category/categories">
                    <a>Categories</a>
                  </Link>
                </li>
                <li>
                  <Link href="/favourite/favourities">
                    <a>Favourities</a>
                  </Link>
                </li>
              </ul>
            </Typography>
          </Toolbar>
        </AppBar>
      </Box>
    </div>
  );
};

export default Header;
