import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 0px 30px;
  background-color: white;
  .error__img {
    max-width: 500px;
    img {
      width: 100%;
    }
  }
  .error__text {
    h1 {
      margin-bottom: 15px;
      font-size: clamp(1.4rem, 2.5vw, 2.2rem);
    }
    div {
      margin-bottom: 30px;
      font-size: clamp(1.2rem, 2vw, 1.5rem);
      font-weight: 600;
    }
  }
  @media only screen and (max-width: 950px) {
    flex-direction: column;
    justify-content: center;
    .error__img {
      margin-bottom: 100px;
    }
  }
`;
