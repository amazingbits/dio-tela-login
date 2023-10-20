import styled from "styled-components";

export const ButtonContainer = styled.button`
  width: 100%;
  padding: 0.8rem;
  background: #9852de;
  color: #ffffff;
  font-weight: 700;
  font-size: 0.875rem;
  border: none;
  cursor: pointer;
  transition: all 0.3s linear;

  &:hover {
    filter: brightness(90%);
  }

  &:disabled {
    opacity: 0.4;
    cursor: not-allowed;
  }
`;
