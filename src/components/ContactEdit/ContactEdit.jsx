import { forwardRef, useEffect, useRef, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { IMaskInput } from 'react-imask';
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react';
import { updateContact } from '../../redux/contacts/operations';
import { selectContacts } from '../../redux/contacts/selectors';

const NumberMask = forwardRef(function TextMaskCustom(props, ref) {
  const { onChange, ...other } = props;
  return (
    <IMaskInput
      {...other}
      mask="(#00) 000-00-00"
      definitions={{
        '#': /[0-9]/,
      }}
      inputRef={ref}
      onAccept={value => onChange({ target: { name: props.name, value } })}
      overwrite
    />
  );
});

const ContactEdit = ({ contactId, onClose, isOpen }) => {
  const dispatch = useDispatch();
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', number: '' });

  const contacts = useSelector(selectContacts);
  const currentContact = contacts.filter(
    contact => contact.id === contactId
  )[0];

  useEffect(() => {
    currentContact &&
      setFormData({
        name: currentContact.name,
        number: currentContact.number,
      });
  }, [currentContact]);

  const handleSubmit = e => {
    e.preventDefault();

    if (
      formData.name === currentContact.name &&
      formData.number === currentContact.number
    ) {
      return;
    }

    dispatch(updateContact({ contactId, formData }));
    onClose();
    setFormData({ name: '', number: '' });
  };

  const handleChange = e => {
    let { name, value } = e.target;

    if (name === 'name') {
      value = value.replace(/[^a-zA-Zа-яА-ЯіІʼ\s-]/g, '');
    }

    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  return (
    <Modal
      isCentered
      initialFocusRef={initialRef}
      finalFocusRef={finalRef}
      isOpen={isOpen}
      onClose={onClose}
    >
      <ModalOverlay />
      <ModalContent>
        <ModalHeader color="black">Update contact</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <FormControl>
            <FormLabel color="black">Full name</FormLabel>
            <Input
              ref={initialRef}
              name="name"
              value={formData.name}
              placeholder="Full name"
              color="black"
              onChange={handleChange}
              isRequired={true}
            />
          </FormControl>

          <FormControl mt={4}>
            <FormLabel color="black">Phone number</FormLabel>
            <Input
              name="number"
              value={formData.number}
              placeholder="Number"
              color="black"
              onChange={handleChange}
              as={NumberMask}
              isRequired={true}
            />
          </FormControl>
        </ModalBody>

        <ModalFooter>
          <Button colorScheme="pink" mr={3} onClick={handleSubmit}>
            Save
          </Button>
          <Button onClick={onClose}>Cancel</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default ContactEdit;
