// src/components/ProfilePreview.js
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box, Input, Textarea, FormControl, FormLabel, VStack, Button} from '@chakra-ui/react';
import { updateProfile } from '../redux/actions';

const ProfilePreview = () => {
  const dispatch = useDispatch();
  const profile = useSelector(state => state.profile);
  const theme = useSelector(state => state.theme); // Fetch theme from Redux state
  const [portfolios, setPortfolios] = useState([]); // State to hold portfolios

  // Load profile data from local storage on component mount
  useEffect(() => {
    const savedProfile = localStorage.getItem('profile');
    if (savedProfile) {
      dispatch(updateProfile(JSON.parse(savedProfile)));
    }
  }, [dispatch]);

  // Update profile state and save to local storage on input change
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    const updatedProfile = { ...profile, [name]: value };
    dispatch(updateProfile(updatedProfile));
    localStorage.setItem('profile', JSON.stringify(updatedProfile));
  };

  // Handle creating a portfolio and saving to local storage
  const handleCreatePortfolio = () => {
    const newPortfolio = { ...profile };
    setPortfolios([...portfolios, newPortfolio]);
    localStorage.setItem('portfolios', JSON.stringify([...portfolios, newPortfolio]));
  };

  return (
    <Box p={4} bg={theme} color="#333" minHeight="50vh" minWidth="100vh" border="1px solid black" alignContent="center">
      <VStack spacing={5} align="strech">
        <FormControl fontSize="3vh" fontWeight="bold">
          <FormLabel>Name</FormLabel>
          <Input minWidth="90vh" 
            name="name"
            value={profile.name}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl fontSize="3vh" fontWeight="bold">
          <FormLabel>Designation</FormLabel>
          <Input minWidth="90vh"
            name="designation"
            value={profile.designation}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl fontSize="3vh" fontWeight="bold">
          <FormLabel>Location</FormLabel>
          <Input minWidth="90vh"
            name="location"
            value={profile.location}
            onChange={handleInputChange}
          />
        </FormControl>
        <FormControl fontSize="3vh" fontWeight="bold">
          <FormLabel>Bio</FormLabel>
          <Textarea minWidth="90vh"
            name="bio"
            value={profile.bio}
            onChange={handleInputChange}
            rows={4}
          />
        </FormControl>
        <Button onClick={handleCreatePortfolio}>Create Portfolio</Button>
      </VStack>
    </Box>
  );
};

export default ProfilePreview;
