import { Link } from "react-router-dom";
import styled from "styled-components";
import { SecondaryButton } from "../components/UI/Buttons";
import { blue, white } from "../components/UI/Variables";

const PageError = styled.section`
    width: 100%;
    background: ${blue};
    padding: 10%;
`

const ErrorContainer = styled.div`
    width: 100%;
    max-width: 71rem;
    margin: auto;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    text-align: center;
    align-items: center;
    color: ${white};
    font-family: "Raleway", sans-serif;
    font-size: 1.375rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    @media (max-width: 767px) {
        font-size: 1rem;
    }
`

const Title = styled.h2`
    border-bottom: solid 2px ${white};
    padding-bottom: 0.5rem;
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    @media (max-width: 1023px) {
        font-size: 1.375rem;
    }
`

const Page404 = () => {
    return (
        <PageError>
            <ErrorContainer>
                <Title>Error 404</Title>
                <p>Esta pagina no existe, haz clic en el siguiente enlace para ir a la pagina de inicio.</p>
                <Link to="/">
                    <SecondaryButton>Home</SecondaryButton>
                </Link>
            </ErrorContainer>
        </PageError>
    );
}

export default Page404;
