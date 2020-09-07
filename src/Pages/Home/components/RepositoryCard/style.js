import styled from "styled-components";

export const Container = styled.div`
  background-color: #ffff;
  padding: 50px;
  border-radius: 10px;
  transition: transform 0.2s;
  height: 390px;
  :hover {
    transform: scale(1.025);
  }

  cursor: pointer;

  -webkit-box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.26);
  -moz-box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.26);
  box-shadow: 0px 0px 9px 1px rgba(0, 0, 0, 0.26);

  .img-container {
    display: flex;
    justify-content: center;
  }

  .thumb {
    width: 150px;
    height: 150px;
    display: flex;
    justify-content: center;
    flex-direction: row;

    img {
      border-radius: 50%;
    }
  }

  .user {
    color: #656565;
  }

  .description {
    font-size: 16px;
    color: #909090;
  }
`;
