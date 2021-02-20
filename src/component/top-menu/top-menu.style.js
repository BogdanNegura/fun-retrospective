import { Link } from "@reach/router"
import styled from "styled-components"

export const StyledLink = styled(Link)`
    color: red;
    background-color: whitesmoke;
    padding: 10px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);

    &:hover {
        background-color: grey;
        color: white;
    }
`

export const Nav = styled.nav`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: 1fr auto auto ;
`