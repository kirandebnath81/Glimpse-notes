import styled from "styled-components";

export const Container = styled.div`
  padding: 35px 50px 0px 50px;
  .home__header {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    margin-bottom: 50px;
    font-weight: 500;
    img {
      margin-right: 8px;
    }

    .home__logo {
      font-size: 1.6rem;
      font-weight: 600;
      letter-spacing: 1.5px;
      color: rgba(0, 0, 0, 0.75);
    }
  }

  @media screen and (min-width: 601px) and (max-width: 950px) {
    padding: 30px 50px 100px 50px;
  }
  @media screen and (max-width: 600px) {
    padding: 25px 20px 70px 20px;
  }
`;

export const Box = styled.div`
  display: flex;
  justify-content: center;

  @media screen and (max-width: 950px) {
    flex-direction: column-reverse;
    align-items: center;
  }
`;

export const LeftBox = styled.div`
  flex-basis: 40%;
  padding-top: 50px;
  margin-right: 50px;
  .home__main-heading {
    font-size: clamp(1.7rem, 4vw, 2.8rem);
    font-weight: 600;
    line-height: clamp(2.3rem, 6vw, 3.35rem);
    color: rgba(0, 0, 0, 0.85);
  }
  .home__sub-heading {
    font-size: clamp(1rem, 2vw, 1.1rem);
    color: rgba(0, 0, 0, 0.6);
    font-weight: 500;
    margin: 10px 0px 30px;
    line-height: clamp(1.3rem, 2.5vw, 1.5rem);
  }

  @media screen and (max-width: 950px) {
    margin-right: 0px;
    padding-top: 30px;

    .home__btn {
      padding: 6px 16px;
      font-size: 1.1rem;
    }
  }
`;

export const RightBox = styled.div`
  flex-basis: 42%;
  min-width: 450px;
  img {
    width: 100%;
    height: 450px;
  }
  @media screen and (min-width: 600px) and (max-width: 950px) {
    min-width: 250px;
    max-width: 500px;
  }

  @media screen and (max-width: 600px) {
    min-width: 240px;
    max-width: 350px;
    height: 200px;
    img {
      height: 100%;
      padding: 10px;
    }
  }
`;
