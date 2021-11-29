import React from 'react';

import Container from "@mui/material/Container";
import styles from "./styles";
import {Typography} from "@mui/material";
import {Link} from "react-router-dom";

export function NoMatchPage() {
  return (
      <Container
          // @ts-ignore
          sx={styles.container}>
          <Typography variant='h2' component='h1' align='center'>
              PAGE NOT FOUND
                  <Typography variant='h6' component='p'>
                      Go to the <Link to='/'>home page</Link>
                  </Typography>
          </Typography>

      </Container>

  );
}
