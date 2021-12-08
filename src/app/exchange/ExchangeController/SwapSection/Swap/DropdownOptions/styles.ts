import styled from 'styled-components'

export const DropdownOptionsWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  max-height: 100%;
  border: 1px solid #d9d9d9;
  border-radius: 5px;
  background-color: #ffffff;
  padding: 10px;
  font-style: normal;
  font-weight: normal;
  transition: 0.2s ease-in-out;
  overflow-x: hidden;
  overflow-y: auto;

  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
  }
`

export const Title = styled.div`
  font-weight: 600;
  font-size: 14px;
  color: #000000;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #f0f0f0;

  input {
    all: unset;
    padding: 10px 0;
    width: 100%;
    margin-right: 10px;
  }
`

export const ArrowWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`
