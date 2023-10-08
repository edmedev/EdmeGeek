import styled from "styled-components";
import Copyright from "./Copyright";
import { lightBlue, lightBlack } from "../UI/Variables";

const FooterContainer = styled.footer`
    width: 100%;
    display: flex;
    flex-direction: column;
    background: ${lightBlue};
`;

const FooterTop = styled.div`
    width: 100%;
    max-width: 79rem;
    margin: auto;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 7rem;
    padding: 4rem;
`;

const FooterBottom = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    align-self: stretch;
    padding: 2rem 4rem;
    text-align: center;
    background: ${lightBlack};
`;

const Footer = () => {
    return(
        <FooterContainer>
            <FooterTop>
                ...
            </FooterTop>
            <FooterBottom>
                <Copyright />
            </FooterBottom>
        </FooterContainer>
    );
}

export default Footer;
