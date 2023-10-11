import styled from "styled-components";
import { lightGrey, lightBlue } from "../UI/Variables";

export const Section = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 4rem;
    background: ${lightGrey};
    @media (max-width: 767px) {
        padding: 2rem 1rem;
    };
    @media (min-width: 768px) and (max-width: 1023px) {
        padding: 2rem;
    };
`;

export const Container = styled.div`
    width: 100%;
    max-width: 71rem;
    margin: auto;
`

export const ProductCategory = styled.div`
    width: 100%;
    max-width: 71rem;
    margin: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
`;

export const CategoryHead = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
`;

export const GroupedProducts = styled.ul`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 1rem;
    @media (max-width: 767px) {
        flex-wrap: wrap;
        gap: 1.5rem 1rem;
    };
`;

export const ItemProduct = styled.li`
    width: 11rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 0.5rem;
    flex: 1 0 0;
    @media (max-width: 767px) {
        width: 9.75rem;
        align-self: stretch;
        flex: auto;
    }
    @media (min-width: 768px) and (max-width: 1023px) {
        width: 10.25rem;
    }
`;

export const ImgProduct = styled.img`
    width: 100%;
    align-self: stretch;
`;

export const FooterContainer = styled.footer`
    width: 100%;
    display: flex;
    flex-direction: column;
    background: ${lightBlue};
`;

