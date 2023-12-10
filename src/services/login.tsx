export const handleLogin = (email: string, password: string): string | null => {
    const isValid = email === 'bank@email.com' && password === '1234';
    
    if (email === '' || password === '') {
        return null;
    }

    if (isValid) {
        return 'true';
    } else {
        return 'false';
    }
};