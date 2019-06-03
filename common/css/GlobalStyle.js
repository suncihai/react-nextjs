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
  @font-face {
    font-display: auto;
    font-family: 'DIN-Regular';
    src: url('../../assets/iconfont/DIN/DIN-Regular.otf');
  }
  @font-face {
    font-display: auto;
    font-family: 'DIN-Bold';
    src: url('../../assets/iconfont/DIN/DIN-Bold.otf');
  }
  .green {
     color: #8bc34a;
  }
  .red {
     color: #f44336;
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
    0%   { opacity: 1; }
    50%  { opacity: 0;}
    100% { opacity: 1; }
  }
  @-moz-keyframes GREEN-FADE {
    0%   { opacity: 1; }
    50%  { opacity: 0;}
    100% { opacity: 1; }
  }
  @-o-keyframes GREEN-FADE {
    0%   { opacity: 1; }
    50%  { opacity: 0;}
    100% { opacity: 1; }
  }
  @keyframes GREEN-FADE {
    0%   { opacity: 1; }
    50%  { opacity: 0;}
    100% { opacity: 1; }
  }
  @-webkit-keyframes RED-FADE {
    0%   { opacity: 1; }
    50%  { opacity: 0;}
    100% { opacity: 1; }
  }
  @-moz-keyframes RED-FADE {
    0%   { opacity: 1; }
    50%  { opacity: 0;}
    100% { opacity: 1; }
  }
  @-o-keyframes RED-FADE {
    0%   { opacity: 1; }
    50%  { opacity: 0;}
    100% { opacity: 1; }
  }
  @keyframes RED-FADE {
    0%   { opacity: 1; }
    50%  { opacity: 0;}
    100% { opacity: 1; }
  }
`
