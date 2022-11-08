import { Card, CardContent, Typography, CardActionArea } from '@mui/material';
import { connect } from 'react-redux';

const List = (props) => {
  console.log(props);

  const productOrder = props.list.products.filter(product => product.category === props.list.activeCategory);

  return (
    <>
      {
        productOrder.map((products, index) => (
          <Card align="center" key={`products-${index}`}>
            <CardContent>{products.image}</CardContent>
            <CardActionArea>
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {products.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  ${products.price}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Quantity In Stock: {products.inventory}
                </Typography>
              </CardContent>
            </CardActionArea>
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



export default connect(mapStateToProps)(List)
