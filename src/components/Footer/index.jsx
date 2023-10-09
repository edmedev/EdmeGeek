import styled from "styled-components";
import Logo from "./Logo";
import { FooterContainer } from "../Container";
import LinkList from "./LinkList";
import Copyright from "./Copyright";
import ContactForm from "./ContactForm";
import { lightBlack } from "../UI/Variables";

const FooterTop = styled.div`
    width: 100%;
    max-width: 80rem;
    margin: auto;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 7rem;
    padding: 4rem;
    @media (max-width: 767px) {
        flex-direction: column;
        padding: 2rem 1rem;
        gap: 2rem;
    };
    @media (min-width: 768px) and (max-width: 1023px) {
        padding: 2rem;
        gap: 1rem;
    };
`;

const PageInfo = styled.div`
    width: 29rem;
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    gap: 7rem;
    flex: 1 0 0;
    @media (max-width: 767px) {
        width: 100%;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
    };
    @media (min-width: 768px) and (max-width: 1023px) {
        width: 15.875rem;
        flex-direction: column;
        gap: 1rem;
        align-items: center;
    };
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
    @media (max-width: 1023px) {
        padding: 2rem;
    };
`;

const Footer = () => {
    return(
        <FooterContainer>
            <FooterTop>
                <PageInfo>
                    <Logo />
                    <LinkList />
                </PageInfo>
                <ContactForm />
            </FooterTop>
            <FooterBottom>
                <Copyright />
            </FooterBottom>
        </FooterContainer>
    );
}

export default Footer;
