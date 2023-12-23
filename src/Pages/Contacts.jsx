import React, { useEffect } from 'react';
import { useDisclosure } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { AddIcon } from '@chakra-ui/icons';
import { Heading, Button } from '@chakra-ui/react';
import { selectContacts } from '../redux/contacts/selectors';
import { Container } from 'components/Common';
import { fetchContacts } from '../redux/contacts/operations';
import ContactsList from 'components/ContactsList/ContactsList';
import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';

const Contacts = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <Container style={{ paddingTop: 116 }}>
      {contacts.length > 0 ? (
        <>
          <Filter />
          <ContactsList />
        </>
      ) : (
        <Heading as="h1" size="lg">
          No contacts yet.
        </Heading>
      )}
      <Button
        height={50}
        width={50}
        rounded="50%"
        position="fixed"
        display="flex"
        justifyContent="center"
        alignItems="center"
        right={10}
        bottom={10}
        onClick={onOpen}
      >
        <AddIcon />
      </Button>

      <ContactForm onClose={onClose} isOpen={isOpen} />
    </Container>
  );
};

export default Contacts;
