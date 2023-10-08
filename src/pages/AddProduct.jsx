import styled from "styled-components";
import AddProductForm from "../components/Form/AddProductForm";
import { lightGrey } from "../components/UI/Variables";

const AddProductPage = styled.section`
    width: 100%;
    padding: 4rem;
    background: ${lightGrey};
    @media (max-width: 767px) {
        padding: 2rem 1rem;
    }
    @media (max-width: 768px) and (max-width: 1023px) {
        padding: 2rem;
    }
`

const AddProduct = () => {
    return (
        <AddProductPage>
            <AddProductForm />
        </AddProductPage>
    );
}

export default AddProduct;
