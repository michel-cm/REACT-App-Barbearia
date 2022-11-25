import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;

  height: 60px;
  color: #fff;
  padding: 2rem 3rem;

  div {
    display: flex;
    gap: 0.4rem;
    font-size: 0.9rem;

    span {
      font-size: 0.9rem;
      font-weight: bold;
    }
  }
`;
