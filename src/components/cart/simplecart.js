import React, { useState } from 'react';
import { connect } from 'react-redux';
import { removeItem } from '../../store/cart';


import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

import { ListSubheader, List, ListItemButton, ListItemIcon, ListItemText, Collapse, } from '@mui/material';

const SimpleCart = (props) => {
  let [open, setOpen] = React.useState(true);
  
  const { removeItem, quantity } = props;
  
  
  const handleClick = () => {
    setOpen(!open);
    
  }

  return (
    <>
      <List sx={{ width: '100%', maxWidth: 360, }}
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={<ListSubheader component="div" id="nested-list-subheader"></ListSubheader>}
      >
        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
            <ShoppingCartIcon />
          </ListItemIcon>
          <ListItemText primary={quantity} />{open ? <ExpandLess /> : <ExpandMore />}</ListItemButton>

        <Collapse in={open} timeout="auto" unmountOnExit>
          {
            props.cart.itemsForPurchase.map((item, index) => (
              <List key={`item-${index}`} component="div" disablePadding>
                <ListItemButton onClick={() => removeItem(item)} aria-label="delete" sx={{ pl: 4 }}>
                  <ListItemText primary={item.name} />
                  <ListItemIcon >
                    <DeleteOutlineIcon />
                  </ListItemIcon>
                </ListItemButton>
              </List>
            ))

          }
        </Collapse>


      </List>
    </>
  )
}


const mapStateToProps = ({ cartReducer }) => {
  return {
    cart: cartReducer,
    quantity: cartReducer.quantityInCart,
  }
}

const mapDispatchToProps = {
  removeItem,
}

export default connect(mapStateToProps, mapDispatchToProps)(SimpleCart);
