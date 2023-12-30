import { useSelector, useDispatch } from 'react-redux';
import { DeleteIcon } from '@chakra-ui/icons';
import { useDisclosure } from '@chakra-ui/react';
import { BsPencilSquare } from 'react-icons/bs';
import {
  Avatar,
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
import { useState } from 'react';
import ContactEdit from 'components/ContactEdit/ContactEdit';

const ContactsList = () => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const filteredContacts = useSelector(selectVisibleContacts);
  const [currentId, setCurrentId] = useState('');

  const handleDelete = contactId => {
    dispatch(deleteContact(contactId));
  };

  const handleEdit = contactId => {
    setCurrentId(contactId);
    onOpen();
  };

  return (
    <>
      <Grid gap={6}>
        {filteredContacts.map(({ id, number, name }) => (
          <GridItem w="100%" key={id}>
            <Card
              backgroundColor="gray.100"
              padding="5px 10px"
              transition="transform 100ms ease-in-out"
              _hover={{ transform: 'scale(1.02)', boxShadow: '' }}
            >
              <Grid
                templateColumns="60px 1fr 1fr 40px 40px"
                alignItems="center"
              >
                <Avatar name={name} />
                <Heading size="md">{name}</Heading>
                <Text>{number}</Text>
                <Button padding="5px">
                  <DeleteIcon onClick={() => handleDelete(id)} />
                </Button>
                <Button padding="5px">
                  <Icon as={BsPencilSquare} onClick={() => handleEdit(id)} />
                </Button>
              </Grid>
            </Card>
          </GridItem>
        ))}
      </Grid>

      <ContactEdit onClose={onClose} isOpen={isOpen} contactId={currentId} />
    </>
  );
};

export default ContactsList;
