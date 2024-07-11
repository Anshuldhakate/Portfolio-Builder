// src/components/PortfolioTable.js
import React, { useEffect, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Center } from '@chakra-ui/react'; // Assuming Chakra UI for styling

const PortfolioTable = () => {
  const [portfolios, setPortfolios] = useState([]);

  // Simulating data loading delay
  useEffect(() => {
    const storedPortfolios = JSON.parse(localStorage.getItem('portfolios')) || [];
    setPortfolios(storedPortfolios);
  }, []);

  return (
    <Center>
      <Table variant="striped" colorScheme="gray" size="md" border="1px solid black">
        <Thead>
          <Tr>
            <Th border="1px solid black">Name</Th>
            <Th border="1px solid black">Designation</Th>
            <Th border="1px solid black">Location</Th>
            <Th border="1px solid black">Bio</Th>
          </Tr>
        </Thead>
        <Tbody>
          {portfolios.map((profile, index) => (
            <Tr key={index}>
              <Td>{profile.name}</Td>
              <Td>{profile.designation}</Td>
              <Td>{profile.location}</Td>
              <Td>{profile.bio}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Center>
  );
};

export default PortfolioTable;
