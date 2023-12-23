import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  Flex,
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
} from '@chakra-ui/react';
import { FaLock, FaEnvelope } from 'react-icons/fa';
import { login } from '../../redux/auth/operations';

const CFaLock = chakra(FaLock);
const CFaEnvelope = chakra(FaEnvelope);

const App = () => {
  const dispatch = useDispatch();
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
    setFormData({ email: '', password: '' });
  };

  return (
    <Flex
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
        <Box minW={{ base: '90%', md: '468px' }}>
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
                Login
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
    </Flex>
  );
};

export default App;
