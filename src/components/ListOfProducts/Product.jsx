import styled from "styled-components";
import { Link } from "react-router-dom";
import { MainParagraph } from "../UI/Paragraphs";
import { QuartetTitle } from "../UI/Titles";
import { FifthTitle } from "../UI/Titles";

const ItemProduct = styled.li`
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

const ImgProduct = styled.img`
    width: 100%;
    align-self: stretch;
`;

const Product = ({ image, name, price, id }) => {
    return (
        <ItemProduct>
            <ImgProduct src={image} alt={name} />
            <MainParagraph>{name}</MainParagraph>
            <QuartetTitle>{price}</QuartetTitle>
            <Link to={`producto?${id}`}>
                <FifthTitle>Ver producto</FifthTitle>
            </Link>
        </ItemProduct>
    );
}

export default Product;
