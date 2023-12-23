import { forwardRef, useRef, useState } from 'react';
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
import { addContact } from '../../redux/contacts/operations';
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

const ContactForm = ({ onClose, isOpen }) => {
  const dispatch = useDispatch();
  const initialRef = useRef(null);
  const finalRef = useRef(null);
  const [formData, setFormData] = useState({ name: '', number: '' });

  const contacts = useSelector(selectContacts);

  const handleSubmit = e => {
    e.preventDefault();

    const isExist = contacts.some(contact => {
      return contact.name.toLowerCase() === formData.name.toLowerCase();
    });

    if (isExist) {
      alert(`${formData.name} is already in contacts.`);
      onClose();
      setFormData({ name: '', number: '' });
      return;
    }

    dispatch(addContact(formData));
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
        <ModalHeader color="black">Add new contact</ModalHeader>
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

export default ContactForm;
