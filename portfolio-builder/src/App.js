// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import store from './redux/store';
import Sidebar from './components/Sidebar';
import ThemeSelector from './components/ThemeSelector';
import ProfilePreview from './components/ProfilePreview';
import PortfolioTable from './components/PortfolioTable';
import { Grid, Box, Heading, Flex } from '@chakra-ui/react';

const App = () => (
  <Provider store={store}>
    <Flex minHeight="100vh" alignItems="center" justifyContent="center" flexDirection="column" border="10px solid black" margin="3vh">
      <Heading as="h1" mb={8}>
        Portfolio Builder
      </Heading>
      <Grid templateColumns="repeat(12, 1fr)" gap={6} p={4} maxWidth="1200px" width="100%">
        <Grid item colSpan={{ base: 12, md: 2 }}>
          <Sidebar />
        </Grid>
        <Grid item colSpan={{ base: 12, md: 2 }}>
          <ThemeSelector />
        </Grid>
        <Grid item colSpan={{ base: 12, md: 8 }}>
          <Box p={4} borderWidth="1px" borderRadius="lg" boxShadow="lg">
            <ProfilePreview />
            <Box mt={6}>
              <PortfolioTable />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Flex>
  </Provider>
);

export default App;
