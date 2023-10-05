import styled from "styled-components";
import { logo } from "../../assets/img/logo.svg"
import SearchField from "./SearchField";
import PrimaryButton from "../Buttons/PrimaryButton";

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
        <div>
            <a href="./">
                <WebsiteLogo src={logo} alt="Logotipo de EdmeGeek" />
            </a>
            <SearchField />
            <PrimaryButton url="./login" buttonText="Login" />
        </div>
    )
}

export default Header;
