
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup'
import Typography from '@mui/material/Typography';
import { orderCategory } from '../../store/categories';
import { connect } from 'react-redux';


const Categories = (props) => {

  const { orderCategory } = props;

  return (
    <>
      <Typography variant="h6" component="div" >
        Browse our Categories
      </Typography>
      {
        props.categories.map((category, index) => (
          <ButtonGroup key={`category-${index}`} variant="text" >
            <Button onClick={() => orderCategory(category.name)}>{category.displayName}</Button>
          </ButtonGroup>
        ))
      }
    </>

  )
}

const mapStateToProps = ({ productReducer }) => {
  return {
    categories: productReducer.categories,
  }
}

const mapDispatchToProps = {
  orderCategory,
}

export default connect(mapStateToProps, mapDispatchToProps)(Categories);
