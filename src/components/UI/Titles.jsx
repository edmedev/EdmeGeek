import styled from "styled-components";
import { white } from "./Variables";
import { black } from "./Variables";

export const MainTitle = styled.h1`
    color: ${white};
    font-size: 3.25rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    @media (max-width: 767px) {
        font-size: 1.375rem;
    }
`;

export const SecondaryTitle = styled.h2`
    color: ${black};
    font-size: 2rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    @media (max-width: 1023px) {
        font-size: 1.375rem;
    }
`;

export const TertiaryTitle = styled.h3`
    color: ${black};
    font-size: 1.375rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    @media (max-width: 767px) {
        font-size: 1rem;
    }
`;

export const QuartetTitle = styled.h4`
    color: ${black};
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
`;

export const FifthTitle = styled.h5`
    color: ${black};
    font-size: 1rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    color: var(--azul-100);
    @media (max-width: 767px) {
        font-size: 0.875rem;
    }
`;

