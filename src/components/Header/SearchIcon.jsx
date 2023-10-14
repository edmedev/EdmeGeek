import React from "react";
import styled from "styled-components";

const MobileIcon = styled.div`
    display: none;
    @media (max-width: 767px) {
        display: block;
        cursor: pointer;
    }
`;

const SearchIcon = () => {
    const toggleFormVisibility = () => {
        const searchForm = document.getElementById("searchForm");

        if (searchForm) {
            searchForm.style.display = (searchForm.style.display === "none") ? "flex" : "none";
        }
    };

    return (
        <MobileIcon onClick={toggleFormVisibility}>
            <i 
                className="fa-solid fa-magnifying-glass"
                style={{ color: "#2A7AE4" }}
            ></i>
        </MobileIcon>
    );
}

export default SearchIcon;
