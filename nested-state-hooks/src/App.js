import React, { useEffect } from 'react';
import { Grid, Paper, makeStyles, Container, Box, Typography } from '@material-ui/core';
import FormControlPermissions from './FormControlPermissions/FormControlPermissions';
import { StateInspector, useState } from "reinspect"
import usePermissions from './FormControlPermissions/usePermissions';


const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));
function App() {
  const initialState = [{
    name: 'Project1',
    data: [
      {
        version: 'version one',
        permissions: ['create']
      }
    ]
  },
  {
    name: 'Project2',
    data: [
      {
        version: 'version one',
        permissions: ['create']
      }
    ]
  }]
  const [state, setState] = React.useState({
    create: false,
    read: false,
    write: false,
    delete: false
  }, 'PROJECTS');

  const permissions = usePermissions(state);
  
  const handleChange = name => event => {
    setState({ ...state, [name]: event.target.checked });

  };

  useEffect(() => {
    setProjects(oldStateProjects => {
      return []
    })
  }, [permissions])

  const classes = useStyles();
  const [projects, setProjects] = useState(initialState);

  return (
    <StateInspector>
      <Container className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <FormControlPermissions 
                handleChange={handleChange}
                state={state}
              />
            <Box>
              <Typography>{projects.map(project => project.name)}</Typography>
            </Box>
            </Paper>
          </Grid>
        </Grid>
    </Container>
    </StateInspector>
  );
}

export default App;
