import styled from "styled-components";
import { Link } from "react-router-dom";
import logo from "../../assets/img/logo.svg";

const LogoContainer = styled.div`
    width: 11rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    flex: 1 0 0;
    @media (max-width: 767px) {
        width: 100%;
    };
`;

const LogoImg = styled.img`
    width: 100%;
    max-width: 11rem;
`

const Logo = () => {
    return(
        <LogoContainer>
            <Link to="/">
                <LogoImg src={logo} alt="Logotipo de EdmeGeek" />
            </Link>
        </LogoContainer>
    );
}

export default Logo;
