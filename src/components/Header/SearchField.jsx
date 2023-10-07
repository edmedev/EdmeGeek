import styled from "styled-components";
import { grey, lightGrey } from "../UI/Variables";
import iconSearch from "../../assets/img/iconSearch.svg"

const SearchForm = styled.form`
    width: 24.5625rem;
    display: flex;
    align-items: center;
    gap: 0.5rem;
    padding: 0.5rem 1rem;
    border-radius: 1.25rem;
    background: ${lightGrey};
    @media (max-width: 767px) {
        width: 100%;
        display: none;
    }
    @media (max-width: 768px) and (max-width: 1023px) {
        width: 17rem;
    }
`;

const SearchInput = styled.input`
    display: flex;
    align-items: flex-start;
    flex: 1 0 0;
    background: ${lightGrey};
    border: none;
    color: ${grey};
    font-family: "Raleway", sans-serif;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1rem;
`;

const SearchButton = styled.button`
    width: 1.5rem;
    height: 1.5rem;
    flex-shrink: 0;
    background: ${lightGrey};
    border: none;
    cursor: pointer;
`;

const SearchField = () => {
    return (
        <SearchForm>
            <SearchInput placeholder="¿Qué deseas buscar?" />
            <SearchButton>
                <img src={iconSearch} alt="Icono de busqueda" />
            </SearchButton>
        </SearchForm>
    );
}

export default SearchField;
