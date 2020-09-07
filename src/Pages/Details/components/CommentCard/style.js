import styled from "styled-components";

export const Container = styled.div`
  margin-top: 50px;
  border-radius: 10px;

  -webkit-box-shadow: 0px 10px 61px 2px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: 0px 10px 61px 2px rgba(0, 0, 0, 0.1);
  box-shadow: 0px 10px 61px 2px rgba(0, 0, 0, 0.1);

  .avatar {
    width: 100%;
    max-width: 150px;
    border-radius: 50%;
  }

  .date-container {
    text-align: end;
  }
`;
