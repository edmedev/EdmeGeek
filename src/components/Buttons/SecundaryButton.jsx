import styled from "styled-components";
import { blue } from "../UI/Variables";
import { white } from "../UI/Variables";

const BlueButton = styled.button`
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    margin-top: 0.5rem;
    background: ${blue};
    border: none;
    color: ${white};
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
`;

const SecundaryButton = (url, buttonText) => {
    return (
        <BlueButton src={url}>
            {buttonText}
        </BlueButton>
    )
}

export default SecundaryButton;
