import styled from "styled-components";

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

