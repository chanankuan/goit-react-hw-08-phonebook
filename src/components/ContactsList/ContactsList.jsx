import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { DeleteIcon } from '@chakra-ui/icons';
import { BsPencilSquare } from 'react-icons/bs';
import {
  Icon,
  Grid,
  GridItem,
  Card,
  Heading,
  Text,
  Button,
} from '@chakra-ui/react';
import { selectVisibleContacts } from '../../redux/contacts/selectors';
import { deleteContact } from '../../redux/contacts/operations';

const ContactsList = () => {
  const dispatch = useDispatch();
  const filteredContacts = useSelector(selectVisibleContacts);

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  return (
    <Grid gap={6}>
      {filteredContacts.map(({ id, number, name }) => (
        <GridItem w="100%" key={id}>
          <Card
            backgroundColor="gray.100"
            padding="5px 10px"
            transition="transform 100ms ease-in-out"
            _hover={{ transform: 'scale(1.02)', boxShadow: '' }}
          >
            <Grid templateColumns="150px 1fr 40px 40px" alignItems="center">
              <Heading size="md">{name}</Heading>
              <Text>{number}</Text>
              <Button padding="5px">
                <DeleteIcon onClick={() => handleDelete(id)} />
              </Button>
              <Button padding="5px">
                <Icon as={BsPencilSquare} />
              </Button>
            </Grid>
          </Card>
        </GridItem>
      ))}
    </Grid>
  );
};

export default ContactsList;
