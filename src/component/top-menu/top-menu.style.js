import { Link } from "@reach/router"
import styled from "styled-components"
import { TopMenuOption } from "../topmenu-option/topmenu-option.component"

export const StyledLink = styled(Link)`
    color: red;
    background-color: whitesmoke;
    padding: 10px;
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.2);
    text-decoration: none;
    border-radius: 5px;

    &:hover {
        background-color: grey;
        color: white;
    }
`

export const Nav = styled.nav`
    display: flex;
    justify-content: flex-end;
    background-color: pink;
`