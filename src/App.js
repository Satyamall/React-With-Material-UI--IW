
import { Container } from '@mui/material';
import './App.css';
import GridItem from './Grid/Grid';
import Element from './Elements/Element';
import { makeStyles } from '@mui/styles';
import ButtonAppBar from './AppBar/AppBar';
import { useState } from 'react';

const useStyles = makeStyles((theme) => ({
  paper: {
    margin: theme.spacing(20),
    padding: "1rem",
    color: theme.palette.primary.main
  }
}));

function App() {
  const classes = useStyles();
  const [auth, setAuth] = useState(false);
  const handleToggle=()=>{
     setAuth(!auth)
  }

  if(auth){
    return (
      <Container maxWidth="xl" className={classes.paper}>
        <ButtonAppBar handleToggle={handleToggle} auth={auth}/>
        <h1>React with Material UI</h1>
        <GridItem/>
        <Element/>
      </Container>
    );
  }
  return (
    <ButtonAppBar handleToggle={handleToggle} auth={auth}/>
  )
}

export default App;
