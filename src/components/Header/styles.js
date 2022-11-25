import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 0.7rem;

  height: 60px;
  color: #fff;
  padding: 2.2rem 0.75rem;

  div {
    display: flex;
    gap: 0.4rem;
    font-size: 0.75rem;

    span {
      font-weight: bold;
    }
  }

  img {
    width: 34px;
  }
`;
