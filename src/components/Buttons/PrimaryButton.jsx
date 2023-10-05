import styled from "styled-components";
import { lightBlue } from "../UI/Variables";
import { blue } from "../UI/Variables";

const HeaderButton = styled.button`
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    margin-top: 0.5rem;
    background: ${lightBlue};
    border: none;
    color: ${blue};
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
`;

const PrimaryButton = (url, buttonText) => {
    return (
        <HeaderButton src={url}>
            {buttonText}
        </HeaderButton>
    )
}

export default PrimaryButton;
