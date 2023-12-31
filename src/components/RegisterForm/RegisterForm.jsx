import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  // Flex,
  Heading,
  Input,
  Button,
  InputGroup,
  Stack,
  InputLeftElement,
  chakra,
  Box,
  Avatar,
  FormControl,
  InputRightElement,
  FormErrorMessage,
} from '@chakra-ui/react';
import { FaUserAlt, FaLock, FaEnvelope } from 'react-icons/fa';
import { signup } from '../../redux/auth/operations';
import { validateEmail, validatePass } from 'utils/validation';
import { AnimatedFlex } from 'components/LoginForm/LoginForm.styled';

const CFaUserAlt = chakra(FaUserAlt);
const CFaLock = chakra(FaLock);
const CFaEnvelope = chakra(FaEnvelope);

const RegisterForm = () => {
  const dispatch = useDispatch();
  const [isInvalid, setIsInvalid] = useState({ email: null, password: null });
  const [shake, setShake] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleShowClick = () => setShowPassword(!showPassword);

  const handleChange = e => {
    const { value, name } = e.target;

    if (name === 'email') {
      setIsInvalid(prevState => ({
        ...prevState,
        email: !validateEmail(value),
      }));
    }

    if (name === 'password') {
      setIsInvalid(prevState => ({
        ...prevState,
        password: value.length < 7 || !validatePass(value),
      }));
    }

    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (Object.values(isInvalid).includes(false)) {
      setShake(true);
      setTimeout(() => {
        setShake(false); // Reset shake animation after a short delay
      }, 500);
      return;
    }

    dispatch(signup(formData));
    setFormData({ name: '', email: '', password: '' });
  };

  return (
    <AnimatedFlex
      shake={shake}
      flexDirection="column"
      width="100wh"
      height="100vh"
      justifyContent="center"
      alignItems="center"
    >
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="teal.500" />
        <Heading color="teal.400">Welcome</Heading>
        <Box width={{ base: '90vw', sm: '468px' }}>
          <form onSubmit={handleSubmit}>
            <Stack
              rounded={10}
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaUserAlt color="gray.400" />}
                  />
                  <Input
                    name="name"
                    type="text"
                    color="#000"
                    placeholder="Name"
                    autoComplete="username"
                    onChange={handleChange}
                    isRequired
                  />
                </InputGroup>
              </FormControl>
              <FormControl isInvalid={isInvalid.email}>
                <InputGroup flexDirection="column">
                  <InputLeftElement
                    pointerEvents="none"
                    children={<CFaEnvelope color="gray.400" />}
                  />
                  <Input
                    name="email"
                    type="email"
                    color="#000"
                    placeholder="Email"
                    autoComplete="username"
                    onChange={handleChange}
                    isRequired
                  />
                  {isInvalid.email && (
                    <FormErrorMessage>Email is invalid.</FormErrorMessage>
                  )}
                </InputGroup>
              </FormControl>
              <FormControl isInvalid={isInvalid.password}>
                <InputGroup flexDirection="column">
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.400"
                    children={<CFaLock color="gray.400" />}
                  />
                  <Input
                    name="password"
                    color="#000"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Password"
                    autoComplete="current-password"
                    onChange={handleChange}
                    isRequired
                  />
                  {isInvalid.password && (
                    <FormErrorMessage>
                      Password must contain at least 7 characters and include at
                      least 1 digit.
                    </FormErrorMessage>
                  )}
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      backgroundColor="gray.200"
                      _hover={{ backgroundColor: 'gray.300' }}
                      size="sm"
                      onClick={handleShowClick}
                    >
                      {showPassword ? 'Hide' : 'Show'}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
              <Button
                borderRadius={5}
                type="submit"
                variant="solid"
                colorScheme="pink"
                width="full"
              >
                Sign up
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        Already have an account?{' '}
        <Link
          to="/login"
          style={{ textDecoration: 'underline', color: '#319795' }}
        >
          Sign In
        </Link>
      </Box>
    </AnimatedFlex>
  );
};

export default RegisterForm;
