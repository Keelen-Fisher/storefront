import { connect } from 'react-redux';
import { addItem } from '../../store/cart'
import { Stack, IconButton, CardActions, Typography, CardContent, Card, Container, Box, CardMedia, Button } from '@mui/material'
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import cartReducer from '../../store/cart';

const List = (props) => {
  console.log(props);
  const { addItem } = props;

  const orderCategory = props.list.products.filter(product => product.category === props.list.activeCategory);
  // const orderProducts = props.list.categories.filter(category => category.name === props.list.activeCategory);


  return (
    <>
      <Container align="center">

        {
          orderCategory.map((category, index) => (
            <Card key={`category-${index}`} variant="text">
              <Typography variant="h3">{category.displayName}</Typography>
              <Typography>{category.description}</Typography>
            </Card>
          ))
        }

        <Box sx={{ display: 'flex', flexDirection: 'row', margin: '25px', justifyContent: 'space-around', padding: '0', }}>
          {
            orderCategory.map((category, index) => (
              <Card align="center" key={`products-${index}`}>
                <CardMedia
                  component='img'
                  height='140'
                  image={category.img}
                  alt={category.name}
                />

                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {category.name}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    ${category.price}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Quantity In Stock: {category.inventory}
                  </Typography>
                </CardContent>

                <CardActions>
                  <Stack direction="row" spacing={1}>
                    <Button
                      onClick={() => addItem(category)}
                      variant='text'
                      label="add to cart"
                    >Add To Cart</Button>
                    <IconButton aria-label="delete">
                      <DeleteOutlineIcon />
                    </IconButton>
                  </Stack>
                </CardActions>
              </Card>
            ))
          }
        </Box>
      </Container>
    </>
  )
}

const mapStateToProps = ({ productReducer }) => {
  return {
    list: productReducer,
    cart: cartReducer,
  }
}

const mapDispatchToProps = {
  addItem
}

export default connect(mapStateToProps, mapDispatchToProps)(List);
