import { Link } from "react-router-dom";
import { ItemProduct, ImgProduct } from "../Container/ProductContainers";
import { MainParagraph } from "../UI/Paragraphs";
import { QuartetTitle, FifthTitle } from "../UI/Titles";

const Product = ({ image, name, price, id }) => {
    return (
        <ItemProduct>
            <ImgProduct src={image} alt={name} />
            <MainParagraph>{name}</MainParagraph>
            <QuartetTitle>{price}</QuartetTitle>
            <Link to={`/producto/${id}`}>
                <FifthTitle>Ver producto</FifthTitle>
            </Link>
        </ItemProduct>
    );
}

export default Product;
