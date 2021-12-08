import styled from 'styled-components'

export const ConnectWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`

export const ConnectContent = styled.div`
  width: 100%;
  max-width: 350px;
`

export const Title = styled.div`
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  color: rgba(0, 0, 0, 0.85);
  margin-bottom: 30px;
  text-align: center;
`

export const ConnectButton = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 48px;
  width: 100%;
  background: #ffffff;
  border: 1px solid #d9d9d9;
  box-shadow: 0px 2px 0px rgba(0, 0, 0, 0.016);
  border-radius: 5px;
  font-weight: 500;
  font-size: 14px;
  color: rgba(0, 0, 0, 0.65);
  user-select: none;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:before {
    content: '';
    width: 24px;
    height: 24px;
    position: absolute;
    left: 12px;
    top: 12px;
    background: url('/assets/metamask.svg') no-repeat center center/cover;
  }

  &:hover {
    border-color: #bfbfbf;
  }
`
