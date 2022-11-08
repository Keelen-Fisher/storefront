
import React, { useEffect, useCallback } from 'react';

import {Button, ButtonGroup, Typography } from '@mui/material';

const Categories = props => {


  useEffect(() => {
    
  });

  return (
    <div >
      <Typography variant="h5">Browse our Categories</Typography>
      <ButtonGroup variant="text" color="primary" aria-label="text primary button group">     
          <Button>
            FOOD 
            ELECTRICS
            GAMES
            WEAPONS
          </Button>
      </ButtonGroup>
    </div>
  );
}


export default Categories;
