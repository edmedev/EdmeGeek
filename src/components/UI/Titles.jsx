import styled from "styled-components";
import { white, lightBlack, blue } from "./Variables";

export const MainTitle = styled.h1`
    color: ${white};
    font-family: "Raleway", sans-serif;
    font-size: 3.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    @media (max-width: 767px) {
        font-size: 1.375rem;
    }
`;

export const SecondaryTitle = styled.h2`
    color: ${lightBlack};
    font-family: "Raleway", sans-serif;
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    @media (max-width: 1023px) {
        font-size: 1.375rem;
    }
`;

export const TertiaryTitle = styled.h3`
    color: ${lightBlack};
    font-family: "Raleway", sans-serif;
    font-size: 1.375rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    @media (max-width: 767px) {
        font-size: 1rem;
    }
`;

export const QuartetTitle = styled.h4`
    color: ${lightBlack};
    font-family: "Raleway", sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const FifthTitle = styled.h5`
    color: ${blue};
    font-family: "Raleway", sans-serif;
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    @media (max-width: 767px) {
        font-size: 0.875rem;
    }
`;

export const BannerSubtitle = styled.h3`
    color: ${white};
    font-family: "Raleway", sans-serif;
    font-size: 1.375rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    @media (max-width: 767px) {
        font-size: 1rem;
    }
`;

