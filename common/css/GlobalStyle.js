import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  body,html,h1,h2,h3,h4,h5,p{
    margin: 0;
    padding: 0;
  }
  ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  a {
    text-decoration: none;
  }
  table {
    th {
      &:last-child {
         text-align: right;
      }
    }
    td {
      &:last-child {
        text-align: right;
      }
    }
  }
  .tickGreen {
    -webkit-animation: GREEN-FADE 1s ;
    -moz-animation:    GREEN-FADE 1s ;
    -o-animation:      GREEN-FADE 1s ;
    animation:         GREEN-FADE 1s ;
  }
  .tickRed {
    -webkit-animation: RED-FADE 1s ;
    -moz-animation:    RED-FADE 1s ;
    -o-animation:      RED-FADE 1s ;
    animation:         RED-FADE 1s ;
  }
  .ant-form-item-label {
    text-align: left;
  }
  @-webkit-keyframes GREEN-FADE {
    0%   { background-color: #8bc34a; }
    100% { background-color: transparent; }
  }
  @-moz-keyframes GREEN-FADE {
    0%   { background-color: #8bc34a; }
    100% { background-color: transparent; }
  }
  @-o-keyframes GREEN-FADE {
    0%   { background-color: #8bc34a; }
    100% { background-color: transparent; }
  }
  @keyframes GREEN-FADE {
    0%   { background-color: #8bc34a; }
    100% { background-color: transparent; }
  }
  @-webkit-keyframes RED-FADE {
    0%   { background-color: #f44336; }
    100% { background-color: transparent; }
  }
  @-moz-keyframes RED-FADE {
    0%   { background-color: #f44336; }
    100% { background-color: transparent; }
  }
  @-o-keyframes RED-FADE {
    0%   { background-color: #f44336; }
    100% { background-color: transparent; }
  }
  @keyframes RED-FADE {
    0%   { background-color: #f44336; }
    100% { background-color: transparent; }
  }
`
