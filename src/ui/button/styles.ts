import styled from 'styled-components'

export const Wrapper = styled.button`
  all: unset;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 100%;
  border-radius: 8px;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.016);
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  font-weight: 500;
  color: rgba(0, 0, 0, 0.65);
  cursor: pointer;
  background-color: #ffffff;
  user-select: none;
  transition: 0.2s ease-in-out;

  &.tertirary {
    border: 1px solid #d9d9d9;

    &.enabled:hover {
      border-color: #bfbfbf;
    }
  }

  &.primary {
    font-weight: bold;
    background-color: #0185ff;
    box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.043);
    color: #ffffff;

    &.enabled:hover {
      background-color: #0077e6;
    }

    &.disabled {
      opacity: 0.3;
      cursor: auto;
    }
  }

  &.loading {
    background-color: #babbca;
    color: #ffffff;
    box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.043);
    font-weight: bold;
    cursor: auto;
  }
`
