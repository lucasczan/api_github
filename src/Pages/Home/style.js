import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;

  .search-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 300px;
    background-color: #1e1e1e;

    .group-items {
      width: 600px;

      .MuiFilledInput-root {
        background-color: #ffff;
        border-top-right-radius: 0px;
        border-bottom-left-radius: 4px;
      }

      .MuiFormControl-root {
        width: 100%;
      }

      button {
        height: 56px;
        border: none;
        padding: 0px 30px;
        background-color: #2bbb26;
        border-top-right-radius: 4px;
        border-bottom-right-radius: 4px;
        width: 100%;
        cursor: pointer;
      }

      .icon {
        color: #ffff;
        font-size: 40px;
        padding-top: 5px;
      }
    }
  }
`;
