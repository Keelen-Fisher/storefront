import React from 'react';

import {Typography} from '@mui/material';
import {createStyles} from "@mantine/core"

const useStyles = createStyles((theme) => ({
  footerStyle: {
    backgroundColor: '#eee',
    // padding: theme.spacing(6),
  },
}));

const Footer = props => {

  const classes = useStyles();

  return (
    <footer className={classes.footerStyle}>
      <Typography variant="h6" align="center" gutterBottom>
        &copy; 2022 Code Fellows 401 JavaScript
        </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        React + Redux + Material UI
        </Typography>
    </footer>
  );
}

export default Footer;
