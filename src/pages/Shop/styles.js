import styled from "styled-components";

export const Container = styled.div`
  padding: 0 0.75rem;
  display: flex;
  flex-direction: column;

  gap: 2rem;
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

export const AreaCardsShop = styled.div`
  display: flex;
  gap: 1.5rem;

  @media only screen and (max-width: 600px) {
    & {
      flex-direction: column;
    }
  }
`;

export const ContentCardProduct = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  img {
    width: 7rem;
    margin-bottom: 0.2rem;
  }

  p {
    color: ${(props) => props.theme["gray-400"]};
  }
`;

export const CardProduct = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 1;
  padding: 1rem 0;

  background-color: ${(props) => props.theme["gray-800"]};
  border-left: 6px solid ${(props) => props.theme["gray-600"]};
  border-radius: 0 5px 5px 0;

  &:hover {
    cursor: pointer;
    border-left: 6px solid ${(props) => props.theme.secondary};
  }
`;
