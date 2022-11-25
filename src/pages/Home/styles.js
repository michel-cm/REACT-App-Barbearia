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
    color: ${(props) => props.theme["gray-100"]};
    font-weight: bold;
  }
`;

export const AreaCards = styled.div`
  display: flex;
  gap: 1.75rem;
  justify-content: flex-start;
  flex-wrap: wrap;

  margin-bottom: 3rem;

  img {
    width: 3rem;
  }
`;

export const Card = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 30%;
  flex: 1;
  padding: 1.2rem 1rem;

  background-color: ${(props) => props.theme["gray-800"]};
  border-left: 6px solid ${(props) => props.theme["gray-600"]};
  border-radius: 0 5px 5px 0;
`;

export const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;

  img {
    margin-bottom: 0.75rem;
  }

  p {
    color: ${(props) => props.theme["gray-400"]};
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
    width: 8rem;
    margin-bottom: 0.75rem;
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
  padding: 1rem;

  background-color: ${(props) => props.theme["gray-800"]};
  border-left: 6px solid ${(props) => props.theme["gray-600"]};
  border-radius: 0 5px 5px 0;
`;
