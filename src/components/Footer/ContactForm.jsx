import styled from "styled-components";
import { Link } from "react-router-dom";
import { QuartetTitle } from "../UI/Titles";
import { white, gray, lightBlack } from "../UI/Variables";
import { PrimaryButton } from "../UI/Buttons";

const FormContainer = styled.div`
    width: 35rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    flex-shrink: 0;
    flex: 1 0 0;
    font-family: "Raleway", sans-serif;
    @media (max-width: 767px) {
        width: 100%;
        max-width: 24.5rem;
        margin: auto;
    };
    @media (min-width: 768px) and (max-width: 1023px) {
        width: 100%;
        max-width: 26rem;
        margin: auto;
    };
`;

const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    flex-shrink: 0;
`;

const TextField = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
    gap: 0.4rem;
    padding: 1rem 0.75rem;
    border-radius: 0.25rem;
    background: ${white};
`;

const Label = styled.label`
    width: 100%;
    color: ${gray};
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1rem;
`;

const Input = styled.input`
    width: 100%;
    color: ${lightBlack};
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem;
    border: none;
`;

const TextArea = styled.textarea`
    width: 100%;
    color: ${gray};
    font-family: "Raleway", sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem;
    border: none;
    resize: none;
`;

const ContactForm = () => {
    return(
        <FormContainer>
            <QuartetTitle>Hable con nosotros</QuartetTitle>
            <Form>
                <TextField>
                    <Label>Nombre</Label>
                    <Input
                        type="text"
                        name="name"
                        placeholder="Escribe tu nombre"
                        required
                    />
                </TextField>
                <TextField>
                    <TextArea
                        name="message"
                        rows="5"
                        placeholder="Escribe tu mensaje"
                        required
                    >
                    </TextArea>
                </TextField>

                <Link to="#">
                    <PrimaryButton>
                        Enviar mensaje
                    </PrimaryButton>
                </Link>
            </Form>
        </FormContainer>
    );
}

export default ContactForm;
