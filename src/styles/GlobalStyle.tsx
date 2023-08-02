import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
* {
    margin: 0 auto;
    padding: 0;
    box-sizing: border-box;
    font-family: "Gowun Dodum", sans-serif;
}
a {
    text-decoration: none;
    color: black;
}

button{
    border: none;
    border-radius: 10px;
    font-weight: 900;
    font-size: 18px;
    color: white;
    cursor: pointer;
    &:hover {
        color: black;
    }
}
`;
