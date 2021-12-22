import { Content, LayoutWrapper } from './styles'

import { NavBar } from './navbar'

export const Layout: React.FC = ({ children }) => {
  return (
    <LayoutWrapper>
      <NavBar />
      <Content>{children}</Content>
    </LayoutWrapper>
  )
}
