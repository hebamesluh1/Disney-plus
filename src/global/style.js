import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url(https://fonts.googleapis.com/css?family=Inter:100,200,300,regular,500,600,700,800,900);
* {
    margin : 0;
    padding : 0;
    box-sizing: border-box;
    font-family : "Inter",sans-serif;
}
body{
    color:#fff;
    background-color:#040714;
}
a{
    text-decoration:none;
}
`;
