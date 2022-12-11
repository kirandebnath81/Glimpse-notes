import styled from "styled-components";

export const Box = styled.div`
  width: clamp(250px, 90%, 350px);
  max-height: 90vh;
  background-color: white;
  color: black;
  border-radius: 10px;
  padding: 20px 20px 25px;
  overflow-y: scroll;

  .readNote__close-btn {
    width: 100%;
    display: flex;
    justify-content: flex-end;
  }

  .readNote__title {
    font-size: clamp(1.3rem, 3vw, 1.4rem);
    font-weight: 600;
    margin-bottom: 12px;
  }

  .readNote__content {
    font-size: clamp(15px, 1.3vw, 1rem);
    img {
      width: 100%;
      border-radius: 10px;
    }
  }
`;
