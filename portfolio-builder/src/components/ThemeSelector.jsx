import React from 'react';
import { useDispatch } from 'react-redux';
import { updateTheme } from '../redux/actions';
import { Box, Grid, Button } from '@chakra-ui/react'; 

const colors = {
    solids: ['#808080','#FF0000', '#00FF00', '#0000FF'],
    linearGradients: [
      'linear-gradient(to right, #ff7e5f, #feb47b)',
      'linear-gradient(to right, #6a11cb, #2575fc)',
      'linear-gradient(to right, #1e3c72, #2a5298)',
      'linear-gradient(to right, #ff512f, #dd2476)',
      'linear-gradient(to right, #feac5e, #c779d0)',
      'linear-gradient(to right, #0abfbc, #45d4ff)',
      'linear-gradient(to right, #ff4e50, #f9d423)',
      'linear-gradient(to right, #17ead9, #6078ea)',
      // Add more linear gradients as needed
    ],
    radialGradients: [
      'radial-gradient(circle, #ff7e5f, #feb47b)',
      'radial-gradient(circle, #6a11cb, #2575fc)',
      'radial-gradient(circle, #1e3c72, #2a5298)',
      'radial-gradient(circle, #feac5e, #c779d0)',
      'radial-gradient(circle, #ff512f, #dd2476)',
      'radial-gradient(circle, #0abfbc, #45d4ff)',
      'radial-gradient(circle, #ff4e50, #f9d423)',
      'radial-gradient(circle, #17ead9, #6078ea)',
      // Add more radial gradients as needed
    ]
  };

const ThemeSelector = () => {
  const dispatch = useDispatch();

  const handleThemeChange = (color) => {
    dispatch(updateTheme(color));
  };

  return (
    <Box>
      <h2>Apply a skin to your profile</h2>
      {['solids', 'linearGradients', 'radialGradients'].map((type) => (
        <Grid key={type} templateColumns="repeat(4, 1fr)" gap={2}>
          {colors[type].map((color, index) => (
            <Button
              key={index}
              bg={color}
              w="50px"
              h="50px"
              margin={8}
              onClick={() => handleThemeChange(color)}
            />
          ))}
        </Grid>
      ))}
    </Box>
  );
};

export default ThemeSelector;
