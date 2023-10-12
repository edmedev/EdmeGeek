import styled from "styled-components";
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom"
import { blue, lightBlue } from "../UI/Variables";

const HeaderButton = styled.button`
    width: 11.375rem;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 0.625rem;
    flex-shrink: 0;
    padding: 1rem;
    border: 2px solid ${blue};
    background: ${lightBlue};
    color: ${blue};
    font-family: "Raleway", sans-serif;
    cursor: pointer;
    font-size: 1rem;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    &:hover {
        background: ${blue};
        color: ${lightBlue};
    }
    @media (max-width: 767px) {
        max-width: 7.5rem;
        padding: 0.75rem 1rem;
    }
    @media (max-width: 768px) and (max-width: 1023px) {
        width: 10.375rem;
    }
`;

const Button = () => {
    const [buttonText, setButtonText] = useState("");
    const [routeButton, setRouteButton] = useState("");
    const location = useLocation();

    useEffect(() => {
        const currentPage = location.pathname;

        if (currentPage === '/' || currentPage === '/index.html') {
            setButtonText("Login");
            setRouteButton("/acceso");
        } else if (currentPage === "/dashboard" || currentPage === '/dashboard.html') {
            setButtonText("Admin");
            setRouteButton('/menu-administrador');
        } else if (currentPage === "/agregar-producto" || currentPage === '/agregar_producto.html') {
            setButtonText("Admin");
            setRouteButton('/menu-administrador');
        } else {
            setButtonText("");
            setRouteButton("");
        }
    }, [location.pathname]);

    if (buttonText === "") {
        return null;
    }

    return (
        <Link to={routeButton}>
            <HeaderButton>
                {buttonText}
            </HeaderButton>
        </Link>
    );
}

export default Button;
