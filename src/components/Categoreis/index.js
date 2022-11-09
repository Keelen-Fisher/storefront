// import React, { useEffect, useCallback } from 'react';

import {categoryOrder} from '../../store/actions';
import { Button, ButtonGroup, Typography } from '@mui/material';

import { connect } from 'react-redux';

const Categories = (props)=> {


  const { categoryOrder  } = props;

  return (
    <>
      <Typography variant="h6" component="div" sx={{ flexGrow: 2 }}>
        Browse our Categories
      </Typography>
      <ButtonGroup variant="text" aria-label="text button group">
        <Button onClick={() => categoryOrder('food')}>Food</Button>
        <Button onClick={() => categoryOrder('electronics')}>Electronics</Button>
      </ButtonGroup>
    </>
  );
}



// takes the state of the Redux store as an argument and returns an
//  object that contains the data that the component needs.
//  returns an object with the list and categories properties.
 
const mapStateToProps = (store) => {
  return {
   
    categories: store.categoriesReducer.categories,
    product: store.productReducer.categories
  }
}


const mapDispatchToProps = {
  categoryOrder,
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
