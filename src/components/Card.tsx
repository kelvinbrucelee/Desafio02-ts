import { useState } from 'react';
import {
  ChakraProvider,
  Box,
  FormControl,
  Input,
  Button,
  Heading,
  Text,
  VStack,
  Link,
  Alert,
  AlertIcon,
} from '@chakra-ui/react';
import {Mandatory} from '../components/Mandatory'

const Card = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showAlert, setShowAlert] = useState(false);
  const [showError, setShowError] = useState(false);
  const [mandatoryEmail, setMandatoryEmail] = useState(false);
  const [mandatoryPassword, setMandatoryPassword] = useState(false);

  const handleLogin = () => {
    const isValid = email === 'bank@email.com' && password === '1234';
    setShowAlert(false);
    setShowError(false);

    const isEmailValid = email !== '';
    const isPasswordValid = password !== '';

    setMandatoryEmail(!isEmailValid);
    setMandatoryPassword(!isPasswordValid);

    const isFormValid = isValid && isEmailValid && isPasswordValid;

    setShowAlert(isFormValid);

    if(isEmailValid && isPasswordValid){
      setShowError(!isValid);
    }
  };

  const handleAlertClose = () => {
    setShowAlert(false);
  };

  return (
    <ChakraProvider>
        {showAlert && (
          <div data-testid="alert">
            <Alert status="success" variant="subtle" flexDirection="column" alignItems="center" justifyContent="center" textAlign="center">
                <AlertIcon boxSize="40px" mr={0} />
                <Text fontSize="lg" fontWeight="bold">
                    Bem-vindo!
                </Text>
                <Text fontSize="lg" fontWeight="bold" color="teal.700">
                  {email}
                </Text>
                <Button mt={4} data-testid="close-button" onClick={handleAlertClose}>
                  Fechar
                </Button>
            </Alert>
          </div>
        )}
      <Box
        minHeight="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        bgGradient="linear(to-r, teal.500, teal.300)"
      >
        <VStack spacing={8} align="center">
          <Box p={8} borderRadius={8} boxShadow="lg" bg="white">
            <Heading mb={4} size="lg" fontWeight="bold" color="teal.500">
              Login
            </Heading>
            <Text fontSize="md" color="gray.600">
              Entre com sua conta
            </Text>
            {showError && (
              <div data-testid="alert-error">
                <Alert status='error'>
                  <AlertIcon />
                    Credenciais inválidas
                </Alert>
              </div>
            )}
            <FormControl id="email" mt={4}>
              <Input
                placeholder="Email"
                data-testid="email-input"
                type="email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            {mandatoryEmail && (
              <Mandatory />
            )}
            <FormControl id="password" mt={4}>
              <Input
                placeholder="Senha"
                data-testid="password-input"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </FormControl>
            {mandatoryPassword && (
              <Mandatory />
            )}
            <Button
              data-testid="btn-submit"
              colorScheme="teal"
              mt={6}
              onClick={handleLogin}
              _hover={{ bg: 'teal.600' }}
            >
              Entrar
            </Button>
          </Box>
          <Text mt={4} fontSize="sm" color="white">
            Ainda não tem uma conta?{' '}
            <Link color="teal.200" href="#">
              Cadastre-se
            </Link>
          </Text>
        </VStack>
      </Box>
    </ChakraProvider>
  );
};

export default Card;