import { AppBar, Toolbar, Button, Typography, Grid, ThemeProvider, createTheme, Box } from '@mui/material';


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
            <Button color="inherit">CART</Button>

          </Toolbar>
        </AppBar>
      </Box>
    </ThemeProvider>
  );
}

export default Header;
