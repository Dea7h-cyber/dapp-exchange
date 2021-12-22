import { NavLink, useLocation } from 'react-router-dom'
import { ActivityNavIcon, HotNavIcon, PortfolioNavIcon, SettingsNavIcon } from 'ui/icons'
import { NavBarWrapper, Version, NavIconWrapper } from './styles'
import { MetamaskButton } from 'app/components'

export const NavBar = () => {
  const pathname = useLocation().pathname
  const isActive = (path: string) => path === pathname

  return (
    <NavBarWrapper>
      <NavLink to='/' className={(nav) => (nav.isActive ? 'active' : '')} data-tip='Portfolio'>
        <NavIconWrapper>
          <PortfolioNavIcon filled={isActive('/')} />
        </NavIconWrapper>
      </NavLink>
      <NavLink to='/transactions' className={(nav) => (nav.isActive ? 'active' : '')} data-tip='Transactions'>
        <NavIconWrapper>
          <ActivityNavIcon filled={isActive('/transactions')} />
        </NavIconWrapper>
      </NavLink>
      <MetamaskButton />
      <NavLink to='/trending' className={(nav) => (nav.isActive ? 'active' : '')} data-tip='Trending'>
        <NavIconWrapper>
          <HotNavIcon filled={isActive('/trending')} />
        </NavIconWrapper>
      </NavLink>
      <NavLink to='/settings' className={(nav) => (nav.isActive ? 'active' : '')} data-tip='Settings'>
        <NavIconWrapper>
          <SettingsNavIcon filled={isActive('/settings')} />
        </NavIconWrapper>
      </NavLink>
      <Version>v1</Version>
    </NavBarWrapper>
  )
}
