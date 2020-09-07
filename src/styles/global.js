import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
  margin:0;
  padding:0;
  outline:0;
  box-sizing:border-box;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.max-lines {
  display: block;
  text-overflow: Ellipsis;
  Word-wrap: break-Word;
  overflow: hidden;
  max-height: 3.6em;
  line-height: 1.8em;
}

a{
  text-decoration:none;
  color:unset;
}

a:hover{
  color:unset;
  text-decoration:none;
}

@media (max-width:991px){
    .group-items{
      width: 80% !important;
    }
    #root > div > div > div > div > div > div{
      width:100%;
    }
    .MuiFilledInput-root{
      width:100%;
    }
   .avatar img {
    width: 100% !important;
    margin-top: -156px;
    }

    .full-name {
      margin-top: 50px !important;
      color: black !important;
    }

    .text-mobile-center{
      text-align:center;
    }
}
`;
