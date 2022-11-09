import { connect } from 'react-redux';

import {Stack, IconButton, CardActions, Typography, CardContent, Card } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const List = (props) => {
  console.log(props);

  const orderCategory = props.list.products.filter(product => product.category === props.list.activeCategory);


  return (
    <>
      {
        orderCategory.map((categories, index) => (
          <Card align="center" key={`products-${index}`}>           
            <CardContent>{categories.img}</CardContent> 
          
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {categories.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ${categories.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Quantity In Stock: {categories.inventory}
                </Typography>
              </CardContent>
            
            <CardActions>
              <Stack direction="row" spacing={1}>
                <IconButton color="primary" aria-label="add to shopping cart">
                  <ShoppingCartIcon />
                </IconButton>
                <IconButton aria-label="delete">
                  <DeleteOutlineIcon />
                </IconButton>
              </Stack>
            </CardActions>
          </Card>
        ))
      }
    </>
  )
}

const mapStateToProps = ({ productReducer }) => {
  return {
    list: productReducer
  }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(List);
