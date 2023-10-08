import styled from "styled-components"
import { gray, lightBlack, white } from "../UI/Variables"

export const FormContainer = styled.div`
    width: 100%;
    max-width: 35rem;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
`

export const Form = styled.form`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
`

export const TextField = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 0.5rem;
    align-self: stretch;
    padding: 0.75rem;
    border-radius: 0.25rem;
    background: ${white};
`

export const Label = styled.label`
    color: ${gray};
    font-family: "Raleway", sans-serif;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1rem;
`

export const Input = styled.input`
    width: 100%;
    color: ${lightBlack};
    font-family: "Raleway", sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem;
    border: none;
`

export const Select = styled.select`
    width: 100%;
    color: ${lightBlack};
    font-family: "Raleway", sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.25rem;
    border: none;
`
