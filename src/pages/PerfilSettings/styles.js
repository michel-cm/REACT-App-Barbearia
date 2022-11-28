import styled from "styled-components";

export const Container = styled.div`
  padding: 0 0.75rem;
`;

export const AreaTitleSection = styled.div`
  font-size: 1rem;
  margin: 1rem 0;
  line-height: 1.25rem;

  color: ${(props) => props.theme["gray-200"]};

  span {
    color: ${(props) => props.theme.primary};
    font-weight: bold;
  }
`;
