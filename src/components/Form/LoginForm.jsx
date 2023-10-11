import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { SecondaryTitle } from '../UI/Titles';
import { FormContainer, Form, TextField, Input } from './FormStyles';
import { TertiaryButton } from '../UI/Buttons';

const LoginForm = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        // Validar el usuario y la contraseña
        if (username === 'admin' && password === '123987') {
            // Redirigir al usuario a la página de dashboard si la validación es exitosa
            navigate('/dashboard');
        } else {
            alert('Usuario o contraseña incorrectos'); // Muestra un mensaje de error si no coinciden
        }
    }

    return (
        <FormContainer>
            <SecondaryTitle>Iniciar Sesión</SecondaryTitle>
            <Form onSubmit={handleSubmit}>
                <TextField>
                    <Input
                        type="text"
                        placeholder="Usuario"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </TextField>
                <TextField>
                    <Input
                        type="password"
                        placeholder="Contraseña"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </TextField>
                <TertiaryButton type="submit">Entrar</TertiaryButton>
            </Form>
        </FormContainer>
    );
}

export default LoginForm;
