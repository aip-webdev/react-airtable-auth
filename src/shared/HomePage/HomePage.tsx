import React from 'react';
import Typography from '@mui/material/Typography';
import styles from './styles';
import Container from '@mui/material/Container';

const HomePage = () => {

    return (
    // @ts-ignore
    <Container sx={styles.container} maxWidth='lg'>
      <Typography variant='h5' component='h5' sx={styles.total} >
        Welcome to homepage!
      </Typography>
    </Container>
  )
}

export default HomePage;
