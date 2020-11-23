import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { Grid, Switch } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

export default function TopAppBar({ setTheme }) {
    const classes = useStyles();

    const [checked, setChecked] = useState(false);
    const handleChange = () => {
      setChecked(prevState => !prevState);
      setTheme(prevState => prevState === "dark" ? "light" : "dark");
    }

    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" className={classes.title}>
                        MDX Editor
                    </Typography>
                    <Typography component="div">
                      <Grid component="label" container alignItems="center" spacing={1}>
                        <Grid item>Light</Grid>
                        <Grid item>
                          <Switch checked={checked} onChange={handleChange} name="checkedC" />
                        </Grid>
                        <Grid item>Dark</Grid>
                      </Grid>
                    </Typography>
                    {/* <Button color="inherit">Save</Button> */}
                </Toolbar>
            </AppBar>
        </div>
    );
}
