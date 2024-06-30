import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    3
  }

  body {
    font-family: Arial, sans-serif;
    background-color: #f4f4f4;
  }

  ul {
    list-style: none;
    padding: 0;
  }

  li {
    margin-bottom: 8px;
  }

  a {
    text-decoration: none;
    color: #007bff;
  }

  a:hover {
    text-decoration: underline;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
     align-items:center;
  }

  input {
    margin-bottom: 8px;
    padding: 8px;
    border: 1px solid #ddd;
  }

  button {
    padding: 8px;
    border: none;
    background-color: #007bff;
    color: #fff;
    cursor: pointer;
  }

  nav {
    margin-top: 20px;
  }

  nav ul {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  h1 {
    margin-bottom: 20px;
  }
`;

export default GlobalStyles;
