import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.cdnfonts.com/css/bw-modelica-ss01');

* {
    margin: 0;
    padding: 0;
}

body {
    color: ${(props) => props.theme.color.whiteColor};
    background: ${(props) => props.theme.color.darkColor};
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-family: 'Bw Modelica SS01', sans-serif;
    font-size: 1rem;
    font-weight: 500;
    overflow-x: hidden
}

ul {
    list-style: none;
    padding: 0;
}
`;

// @import url('https://fonts.googleapis.com/css?family=Courgetto/Lato:400,700');

// * {
//   margin: 0;
//   padding: 0;
//   box-sizing: border-box;
// }

// body {
// font-family: 'Lato', sans-serif;
// font-size: 100%;

// }

// h1 {
//   font-size: 3em;
//   line-height:1.2;
//   margin-bottom: 0.5em;
// }

// h2 {
//   font-size: 2em%;
//   margin-bottom: 0.75em;
// }

// h3 {
//   font-size: 1.5em;
//   line-height:1;
//   margin-bottom: 1.25em;
// }

// h4 {
//   font-size: 1.2em%;
//   line-height:1.2;
//   margin-bottom: 0.5em;
//   font-weight: bold;
// }

// h5 {
//   font-size: 1em;
//   margin-bottom: 1.5em;
//   font-weight: bold;
// }

// h6 {
//   font-size: 1em;
//   font-weight: bold;
// }

// p {
//   line-height:1.5;
//   margin: 0 0 1.5rem 0
// }
