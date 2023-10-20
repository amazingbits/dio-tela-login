import styled from "styled-components";

export const InputContainer = styled.div`
  margin-bottom: 0.85rem;

  label {
    display: block;
    color: #6b6b6b;
    font-size: 0.875rem;
    margin-bottom: 2px;
  }

  input {
    width: 100%;
    padding: 0.75rem;
    color: #333;
    font-weight: 700;
    font-size: 1rem;
    background: rgba(0, 0, 0, 0.05);
    border: 2px solid transparent;
    outline: none;
    transition: all 0.3s linear;
  }

  input:hover,
  input:focus {
    background: #ffffff;
    border: 2px solid #9852de;
  }

  p {
    text-align: right;
    color: #e04646;
    font-size: 0.875rem;
    margin-top: 4px;
  }
`;
