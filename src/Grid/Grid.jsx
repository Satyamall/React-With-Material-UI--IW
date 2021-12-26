import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
  background:  theme.palette.text.secondary
}));

export default function GridItem() {
  return (
    <>
    <Box style={{textAlign: "center"}}>
      <h1>Problem 1 : GRIDS</h1>
    </Box>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={1}>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Item>1</Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Item>2</Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Item>3</Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Item>4</Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Item>5</Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Item>6</Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Item>7</Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Item>8</Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Item>9</Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Item>10</Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Item>11</Item>
        </Grid>
        <Grid item xs={12} sm={6} md={4} lg={3} xl={2}>
          <Item>12</Item>
        </Grid>
      </Grid>
    </Box>
    </>
  );
}
