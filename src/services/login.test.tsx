import { render, fireEvent, act } from '@testing-library/react';
import { handleLogin } from '../services/login'
import Card from '../components/Card';

// Teste de verificação da função de login
describe('handleLogin', () => {
    
    it('deve retornar usúario logado com sucesso!', () => {
        const login = handleLogin('bank@email.com', '1234')
        expect(login).toBe('true')
    })

    it('deve retornar Credenciais inválidas', () => {
        const login = handleLogin('invalid@example.com', '24324')
        expect(login).toBe('false')
    })

    it('deve retornar Campo Obrigatório', () => {
        const login = handleLogin('', '21321')
        expect(login).toBeNull()
    })
})

test('Verifica se o login é inválido', () => {
    const alertMock = jest.fn();
    jest.spyOn(window, 'alert').mockImplementation(alertMock);

    const { getByTestId } = render(<Card />);

    const emailInput = getByTestId('email-input');
    const passwordInput = getByTestId('password-input');
    const submitButton = getByTestId('btn-submit');

    fireEvent.change(emailInput, { target: { value: 'invalid@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'wrongpassword' } });
    fireEvent.click(submitButton);

    const alertError = getByTestId('alert-error');

    if(alertError){
        expect(true).toBeTruthy();
    }else{
        expect(false).toBeTruthy();
    }
});

test('Verifica se o login é valido', () => {
    const { getByTestId } = render(<Card />);
   
    const emailInput = getByTestId('email-input');
    const passwordInput = getByTestId('password-input');
    const submitButton = getByTestId('btn-submit');
    
    fireEvent.change(emailInput, { target: { value: 'bank@email.com' } });
    fireEvent.change(passwordInput, { target: { value: '1234' } });
    fireEvent.click(submitButton);

    const alert = getByTestId('alert');

    if(alert){
        expect(true).toBeTruthy();
    }else{
        expect(false).toBeTruthy();
    }
    
});