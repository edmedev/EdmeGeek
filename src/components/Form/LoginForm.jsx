import { Link } from 'react-router-dom';
import { SecondaryTitle } from '../UI/Titles';
import { FormContainer, Form, TextField, Input } from './FormStyles';
import { TertiaryButton } from '../UI/Buttons';

const LoginForm = () => {
    return(
        <FormContainer>
            <SecondaryTitle>Iniciar Sesión</SecondaryTitle>
            <Form>
                <TextField>
                    <Input
                        type="email"
                        placeholder="Escriba su correo electrónico"
                        required
                    />
                </TextField>
                <TextField>
                    <Input
                        type="password"
                        placeholder="Escriba su contraseña"
                        required
                    />
                </TextField>
                <Link to="/dashboard">
                    <TertiaryButton>Entrar</TertiaryButton>
                </Link>
            </Form>
        </FormContainer>
    );
}

export default LoginForm;
