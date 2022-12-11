import styled from "styled-components";

export const Card = styled.div`
  width: clamp(250px, 100%, 265px);
  height: 220px;
  border-radius: 8px;
  box-shadow: 0px 1.5px 3px 0px rgba(0, 0, 0, 0.5);
  padding: 20px;
  margin: 0px 35px 35px 0px;
  background-color: white;
  transition: 250ms box-shadow ease-in-out, 300ms transform ease-out;

  &:hover {
    transform: scale(1.05);
    box-shadow: 0px 4px 6px 0px rgba(0, 0, 0, 0.6);
  }

  @media screen and (max-width: 600px) {
    margin-right: 0px;
  }
`;

export const TopBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;

  .noteCard__title {
    font-weight: 600;
    font-size: 1.15rem;
    cursor: pointer;
  }

  .noteCard__top-options {
    white-space: nowrap;
    margin-left: 8px;

    .noteCard__priority {
      text-transform: uppercase;
      font-size: 12px;
      color: var(--primary-color);
      font-weight: 600;
      margin-right: 10px;
    }

    .noteCard__pin {
      svg {
        font-size: 15px;
      }
    }
  }
`;

export const ContentBox = styled.div`
  width: 100%;
  height: 65px;
  margin: 15px 0 10px;
  font-size: 14px;
  cursor: pointer;
  overflow-y: hidden;

  img {
    width: 80px;
    height: 65px;
    border-radius: 5px;
  }
`;

export const TagsBox = styled.div`
  height: 25px;
  margin-bottom: 15px;
  overflow: scroll;
  span {
    display: inline;
    background-color: rgba(0, 0, 0, 0.07);
    color: rgba(0, 0, 0, 0.7);
    padding: 2px 5px;
    border-radius: 5px;
    font-size: 11px;
    font-weight: 500;
    margin-right: 8px;
  }

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const FooterBox = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .noteCard__date {
    font-size: 12px;
    font-weight: 500;
    color: rgba(0, 0, 0, 0.6);
  }
`;
