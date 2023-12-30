import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
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
  FormHelperText,
  InputRightElement,
  Text,
} from '@chakra-ui/react';
import { FaLock, FaEnvelope } from 'react-icons/fa';
import { login } from '../../redux/auth/operations';
import { AnimatedFlex } from './LoginForm.styled';
import { selectError } from '../../redux/auth/selectors';

const CFaLock = chakra(FaLock);
const CFaEnvelope = chakra(FaEnvelope);

const LoginForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectError);
  const [shake, setShake] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ email: '', password: '' });

  const handleShowClick = () => setShowPassword(!showPassword);

  const handleChange = e => {
    const { value, name } = e.target;
    setFormData(prevFormData => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(login(formData));
    // setFormData({ email: '', password: '' });
  };

  useEffect(() => {
    if (error === 'Unable to login') {
      setShake(true);
      const id = setTimeout(() => {
        setShake(false); // Reset shake animation after a short delay
      }, 500);

      return () => clearTimeout(id);
    }
  }, [error]);

  return (
    <AnimatedFlex shake={shake}>
      <Stack
        flexDir="column"
        mb="2"
        justifyContent="center"
        alignItems="center"
      >
        <Avatar bg="teal.500" />
        <Heading color="teal.400">Welcome</Heading>
        <Box minW={{ base: '90%', md: '468px' }}>
          <form onSubmit={handleSubmit}>
            <Stack
              rounded={10}
              spacing={4}
              p="1rem"
              backgroundColor="whiteAlpha.900"
              boxShadow="md"
            >
              {error === 'Unable to login' && (
                <Text color="red">Incorrect email or password.</Text>
              )}
              <FormControl>
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
                    value={formData.email}
                    onChange={handleChange}
                    isRequired
                  />
                </InputGroup>
              </FormControl>
              <FormControl>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    color="gray.400"
                    children={<CFaLock color="gray.400" />}
                  />
                  <Input
                    name="password"
                    type={showPassword ? 'text' : 'password'}
                    color="#000"
                    placeholder="Password"
                    autoComplete="current-password"
                    value={formData.password}
                    onChange={handleChange}
                    isRequired
                  />
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
                <FormHelperText textAlign="right">
                  <Link>forgot password?</Link>
                </FormHelperText>
              </FormControl>
              <Button
                borderRadius={5}
                type="submit"
                variant="solid"
                colorScheme="pink"
                width="full"
              >
                Sign in
              </Button>
            </Stack>
          </form>
        </Box>
      </Stack>
      <Box>
        New to us?{' '}
        <Link
          to="/register"
          style={{ textDecoration: 'underline', color: '#319795' }}
        >
          Sign Up
        </Link>
      </Box>
    </AnimatedFlex>
  );
};

export default LoginForm;
