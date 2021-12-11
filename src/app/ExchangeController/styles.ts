import styled from 'styled-components'

export const ControllerWrapper = styled.div`
  margin-top: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 800px) {
    margin-top: 30px;
  }
`

export const ControllerContent = styled.div`
  width: 100%;
  max-width: 1020px;
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-direction: row;
  padding: 0 30px;

  @media (max-width: 800px) {
    flex-direction: column;
    align-items: center;
  }
`
