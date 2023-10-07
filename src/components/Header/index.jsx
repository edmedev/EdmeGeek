import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg"
import SearchField from "./SearchField";
import Button from "./Button";
import { lightBlue } from "../UI/Variables";

const HeaderSection = styled.header`
    width: 100%;
    background: ${lightBlue};
    padding: 2rem 4rem;
    @media (max-width: 767px) {
        padding: 1rem;
    }
    @media (max-width: 768px) and (max-width: 1023px) {
        padding: 2rem;
    }
`;

const HeaderContainer = styled.div`
    max-width: 71rem;
    margin: auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    align-items: center;
`;

const WebsiteLogo = styled.img`
    display: flex;
    width: 11rem;
    justify-content: center;
    align-items: center;
    @media (max-width: 1023px) {
        width: auto;
        wax-width: 6.25rem;
    }
`;

const Header = () => {
    return (
        <HeaderSection>
            <HeaderContainer>
                <Link to="/">
                    <WebsiteLogo src={logo} alt="Logotipo de EdmeGeek" />
                </Link>
                <SearchField />
                <Button />
            </HeaderContainer>
        </HeaderSection>
    );
}

export default Header;
