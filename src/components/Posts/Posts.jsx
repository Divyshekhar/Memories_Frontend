import React from 'react';
import { Grid2, CircularProgress } from '@mui/material';
import { useSelector } from 'react-redux';
import { MainContainer, SmMargin, ActionDiv } from './styles'; // Correct import

import Post from './Post/Post';

const Posts = ({ setCurrentId }) => {
  const posts = useSelector((state) => (state.posts));
  return (
    !posts.length ? <CircularProgress /> : (
      <MainContainer>
        <Grid2 container alignItems="stretch" spacing={3}>
          {posts.map((post) => (
            <Grid2 key={post._id} item="true" xs={12} sm={6}>
              <Post post={post} setCurrentId={setCurrentId} />
            </Grid2>
          ))}
        </Grid2>
      </MainContainer>
    )
  );
}
export default Posts;
