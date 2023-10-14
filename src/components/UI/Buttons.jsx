import styled from "styled-components";
import { blue, lightBlue, navyBlue } from "../UI/Variables";

export const PrimaryButton = styled.button`
    width: auto;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    margin-top: 0.5rem;
    background: ${blue};
    border: solid 2px ${blue};
    color: ${lightBlue};
    font-family: "Raleway", sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
    &:hover {
        background: ${lightBlue};
        color: ${blue};
    }
`;

export const SecondaryButton = styled.button`
    width: 9.25rem;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    margin-top: 0.5rem;
    background: ${navyBlue};
    border: solid 2px ${navyBlue};
    color: ${lightBlue};
    font-family: "Raleway", sans-serif;
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
    &:hover {
        background: ${lightBlue};
        color: ${navyBlue};
    }
    @media (max-width: 767px) {
        width: auto;
    }
`;

export const TertiaryButton = styled.button`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem 3rem;
    margin-top: 0.5rem;
    background: ${blue};
    border: solid 2px ${blue};
    color: ${lightBlue};
    font-family: "Raleway", sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;
    &:hover {
        background: ${lightBlue};
        color: ${blue};
    }
`;

