import { useEffect, useState } from 'react';
import { Container, Grow, Grid } from '@mui/material';
import memories from './images/memories.png';
import Posts from './components/Posts/Posts';
import Form from './components/Form/Form';
import { StyledAppBar, StyledHeading, StyledImage } from './styles'; //custom made using the styles.jsx 
import { useDispatch } from 'react-redux';
import {getPosts} from './actions/posts'

function App() {

  const [currentId, setCurrentId] = useState(null);

  const dispatch = useDispatch();
   
  useEffect(()=>{
    dispatch (getPosts());
  },[dispatch])

  return (
    <Container>
      <StyledAppBar position="static" color="inherit">
        <StyledHeading variant="h2" align="center">Memories</StyledHeading>
        <StyledImage src={memories} alt="memories" height="60" />
      </StyledAppBar>
      <Grow in>
        <Container>
          <Grid container justifyContent="space-between" alignItems="stretch" spacing={3}>
            <Grid item xs={12} sm={7}>
              <Posts setCurrentId = {setCurrentId}/>
            </Grid>
            <Grid item xs={12} sm={4}>
              <Form currentId = {currentId} setCurrentId = {setCurrentId}/>
            </Grid>
          </Grid>
        </Container>
      </Grow>
    </Container>
  );
}

export default App;
