import styled from "styled-components";

export const Container = styled.div`
  padding: 0 0.75rem;
`;

export const AreaTitleSection = styled.div`
  font-size: 1rem;
  margin: 1rem 0;
  line-height: 1.25rem;

  span {
    font-weight: bold;
  }
`;

export const AreaServices = styled.div`
  display: flex;
  gap: 1rem;
  justify-content: space-between;
  flex-wrap: wrap;

  img {
    width: 3rem;
  }
`;

export const CardService = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 48%;
  padding: 1rem 2rem;

  background-color: ${(props) => props.theme["gray-800"]};
  border-left: 6px solid ${(props) => props.theme["gray-600"]};
  border-radius: 0 5px 5px 0;
`;

export const ContentCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

export const Cabelo = styled.div`
  width: 48%;
  padding: 1rem;
  background-color: ${(props) => props.theme["gray-800"]};
`;

export const Barba = styled.div`
  width: 48%;
  background-color: ${(props) => props.theme["gray-700"]};
`;

export const Acabamento = styled.div`
  width: 48%;
  background-color: ${(props) => props.theme["gray-600"]};
`;

export const Completo = styled.div`
  width: 48%;
  background-color: ${(props) => props.theme["gray-500"]};
`;
