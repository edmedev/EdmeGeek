import styled from "styled-components";
import { Link } from "react-router-dom";
import banner from "../../assets/img/banner.jpg";
import { MainTitle, BannerSubtitle } from "../UI/Titles";
import { PrimaryButton } from "../UI/Buttons";
import { white } from "../UI/Variables";

const Section = styled.section`
    width: 100%;
    height: auto;
    padding: 6rem 4rem;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    align-self: stretch;
    background-image: url(${banner});
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    color: ${white};
    @media (max-width: 767px) {
        padding: 4rem 1rem;
    };
    @media (max-width: 768px) and (max-width: 1023px) {
        padding: 4rem 2rem;
    };
`;

const Container = styled.div`
    width: 100%;
    max-width: 71rem;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: flex-start;
    gap: 1rem;
`;

const CallToAction = () => {
    return(
        <Section>
            <Container>
                <MainTitle>Agosto Promocional</MainTitle>
                <BannerSubtitle>Productos selecionados con 33% de descuento</BannerSubtitle>
                <Link to="/categoria/consolas">
                    <PrimaryButton>Ver consolas</PrimaryButton>
                </Link>
            </Container>
        </Section>
    );
}

export default CallToAction;
