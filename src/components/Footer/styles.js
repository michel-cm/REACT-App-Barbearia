import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  height: 50px;
  color: #fff;
  padding: 0rem 0.75rem;

  position: fixed;

  bottom: 0;
  width: 100%;
  max-width: 768px;

  z-index: 99;

  background-color: ${(props) => props.theme["gray-900"]};

  nav {
    width: 100%;
    display: flex;
    justify-content: space-around;

    font-size: 1.5rem;

    a {
      color: ${(props) => props.theme["gray-400"]};
      text-decoration: none;

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &:focus {
        box-shadow: none;
      }

      &:hover {
        border-bottom: 3px solid ${(props) => props.theme.secondary};
      }

      &.active {
        border-bottom: 3px solid ${(props) => props.theme.secondary};
        color: ${(props) => props.theme["gray-100"]};
      }
    }
  }
`;
