import { AppBar, Toolbar, Button, Typography, ThemeProvider, createTheme, Box } from '@mui/material';
import { connect } from 'react-redux';
import Cart from '../cart/simplecart';

const Header = props => {
  const theme = createTheme({
    palette: {
      primary: {
        main: '#ffffff',
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="relative">
          <Toolbar >

            <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
              <h4>Our Store</h4>
            </Typography>
            <Button color="inherit"><Cart/></Button>

          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}

const mapStateToProps = ({ cartReducer }) => {
  return {
    quantity: cartReducer.quantityInCart,
  }
}

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
