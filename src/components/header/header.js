import { AppBar, Toolbar, Button, Typography, Grid } from '@mui/material';


const Header = props => {


  return (
    <AppBar position="relative">
      <Toolbar >
        <Grid container>
          <Grid item xs>
            <Typography color="inherit" component="div">
              <h4>Our Store</h4>
            </Typography>
            <Button edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
              Cart (0)
            </Button>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>

  );
}

export default Header;
