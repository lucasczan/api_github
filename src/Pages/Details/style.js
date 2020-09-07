import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .bg {
    height: 300px;
    background-color: #1e1e1e;
  }

  .avatar {
    display: flex;
    justify-content: center;

    img {
      width: 70%;
      border-radius: 50%;
      margin-top: -250px;
      -webkit-box-shadow: 0px 10px 61px 2px rgba(0, 0, 0, 0.39);
      -moz-box-shadow: 0px 10px 61px 2px rgba(0, 0, 0, 0.39);
      box-shadow: 0px 10px 61px 2px rgba(0, 0, 0, 0.39);
    }
  }
  .full-name {
    margin-top: -100px;
    color: #ffff;
  }
  .counts {
    display: flex;

    p + p {
      margin-left: 50px;
    }

    .number-count {
      font-size: 24px;
      font-weight: bold;
    }
  }

  .icon-container {
    display: flex;
    align-items: center;
  }

  .icon {
    font-size: 16px;
    margin-left: 5px;
  }

  .back {
    font-size: 50px;
    cursor: pointer;
  }
`;
